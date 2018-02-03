import socket
import threading
import mysql
import json



# def handle_client(client_socket,addr):
#     client_socket.send(('您的IP：\t'+addr[0]+':'+str(addr[1])+'\t连接成功！请输入SQL命令'+'SEND_STOP').encode())
#     while True:
#         request=''
#         while True:
#             request = request + client.recv(1024).decode()
#             if request[-9:] == 'SEND_STOP':
#                 break
#         if request[:-9]=='close_connect':
#             break
#         request=request[:-9]
#         print('[*] Recieved: %s' % request)
#         try:
#             if request[:6]=='select':
#                 result=mysql.exe(request)[0]
#                 sent=json.dumps(result)
#             elif request[:6]=='insert' or request[:6]=='delete':
#                 result = mysql.exe(request)[1]
#                 if result==1:
#                     sent=json.dumps(['OK'])
#                 else:
#                     sent=json.dumps(['faild'])
#             else:
#                 sent=json.dumps(['命令有误！'])
#             client_socket.send((sent+'SEND_STOP').encode())
#         except Exception as e:
#             client_socket.send((json.dumps([e]) + 'SEND_STOP').encode())
#         # client_socket.close()
#     client_socket.close()
#     print('diconnect')

def handle2(client_socket,addr):
    client_socket.send(('您的IP：\t' + addr[0] + ':' + str(addr[1]) + '\t连接成功！'+ 'SEND_STOP').encode())
    # while True:
    request=''
    while True:
        request = request + client.recv(1024).decode()
        if request[-9:] == 'SEND_STOP':
            break
    if request[:-9]=='close_connect':
        client_socket.close()
        return
    request=request[:-9]
    print('[*] Recieved: %s' % request)
    try:
        if request[:6]=='search':
            result=search(request[6:])
            sent=json.dumps(result)
        elif request[:6]=='insert':
            result = insert(request[6:])
            sent = json.dumps(result)
        elif request[:6]=='delete':
            result = delete(request[6:])
            sent = json.dumps(result)
        elif request[:5]=='check':
            result=check(request[6:])
            sent=json.dumps(result)
        else:
            sent=json.dumps([{'return':'命令有误！'}])
        client_socket.send((sent+'SEND_STOP').encode())
    except Exception as e:
        client_socket.send((json.dumps([e]) + 'SEND_STOP').encode())
        # client_socket.close()
    client_socket.close()
    print('diconnect')


def search(command):
    if command[10:13]=='ALL':
        [data, result]=mysql.exe('select * from '+command[:10].replace('0',''))
        return data
    elif command[10:13]=='SPC':
        [data, result] = mysql.exe('select * from ' + command[:10].replace('0','')+' where '+command[13:])
        return data


def insert(command):
    check=mysql.exe('select COLUMN_NAME,column_comment from INFORMATION_SCHEMA.Columns where table_name=\"'+command[:6].replace('0','')+'\"')[0]
    keys=[]
    for each in check:
        keys.append(each['COLUMN_NAME'])    #获取所有字段名称
    allkey=','.join(keys)
    # mysql.exe(check)
    cs=command[10:].split(',')
    [data, result] = mysql.exe('insert into ' + command[:10].replace('0', '')+'('+allkey+')value('+command[10:]+')')
    if result==1:
        return [{'return':'OK!'}]
    else:
        return [{'return':'faild!'}]


def delete(command):
    [data, result] = mysql.exe('delete from '+command[:10].replace('0','')+' where '+command[10:])
    if result==1:
        return [{'return':'OK!'}]
    else:
        return [{'return':'faild!'}]

def check(command):
    dy = mysql.exe(
        'select COLUMN_NAME,column_comment from INFORMATION_SCHEMA.Columns where table_name=\"' + command[:10].replace(
            '0', '') + '\"')[0]
    keys = []
    for each in dy:
        keys.append(each['COLUMN_NAME'])  # 获取所有字段名称
    allkey = ','.join(keys)
    return keys


if __name__=='__main__':
    bind_ip = '0.0.0.0'
    bind_port = 6666

    server=socket.socket(socket.AF_INET,socket.SOCK_STREAM)

    server.bind((bind_ip,bind_port))
    server.listen(5)
    print('[*] Listening on %s:%d' % (bind_ip,bind_port))
    while True:
        client,addr = server.accept()
        print('[*] Accepted connection from: %s:%d' % (addr[0],addr[1]))
        client_handler = threading.Thread(target=handle2,args=(client,addr,))
        client_handler.start()
