import socket

target_host='127.0.0.1'
target_port=1234

# client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
# client.connect((target_host,target_port))
while True:
    data=input('>>')
    if not data:
        continue
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect((target_host, target_port))
    client.send(data.encode())
    data=client.recv(4096).decode()
    print(data)
    client.close()
client.close()
