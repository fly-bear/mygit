import socket
import sys

target_host='106.15.199.206'
target_port=5566

# client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
# client.connect((target_host,target_port))
while True:
    data=input('>>')
    if not data:
        continue
    elif data=='exit':
        break
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect((target_host, target_port))
    client.send(data.encode())
    while True:
        data=client.recv(4096).decode()
        if data:
            print(data)
        else:
            break
    # client.close()
client.close()
