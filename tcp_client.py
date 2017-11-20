import socket
import sys
import time

target_host='localhost'
target_port=6666

client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
client.connect((target_host,target_port))
while True:
    data=input('>>')
    if not data:
        continue
    elif data=='exit':
        client.send('close_connect'.encode())
        break
    # client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # client.connect((target_host, target_port))
    client.send(data.encode())
    data=''
    while True:
        data=data+client.recv(4096).decode()
        if data[-13:]=='SEND_finished':
            break
    print(data[:-13])
    # client.close()
client.close()
