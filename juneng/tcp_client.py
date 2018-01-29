import socket
import json


# def mytest():
#     target_host='localhost'
#     target_port=6666
#     client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
#     client.connect((target_host,target_port))
#     receive=''
#     while True:
#         receive=receive+client.recv(1024).decode()
#         if receive[-9:]=='SEND_STOP':
#             break
#     print(receive[:-9])
#     while True:
#         try:
#             data=input('>>')#insert into test(ID,name,status)values(2,李智敏,0)
#             if not data:
#                 continue
#             elif data=='exit':
#                 client.send(('close_connect'+'SEND_STOP').encode())
#                 break
#             # client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#             # client.connect((target_host, target_port))
#             client.send((data+'SEND_STOP').encode())
#             receive=''
#             while True:
#                 receive=receive+client.recv(6).decode()
#                 if receive[-9:]=='SEND_STOP':
#                     break
#             result=json.loads(receive[:-9])
#             for each in result:
#                 if isinstance(each,dict):
#                     print(str(each['ID']) + '\t' + each['name'] + ' \t' + str(each['status']))
#                 elif isinstance(each,str):
#                     print(each)
#         except Exception as e:
#             client.send('SEND_STOP'.encode())
#             print(e)
#             break
#     client.close()

def search(host,port,command):
    # 定义协议：
    # 开头6个字节是命令类型：search,upload,delete
    # 接下来6个字节是表名（末尾补0）
    # 接下来如果是search，先说明查找全部还是特定：ALL和SPC，若是SPC，后接主键值，可用and连接多个主键
    # 如果是upload，后接参数值，按主键顺序，以逗号分隔
    # 如果是delete，后面接“主键名=对应值”
    target_host = host
    target_port = port
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  #创建TCP
    try:
        client.connect((target_host, target_port))
        receive = ''
        while True:
            receive = receive + client.recv(1024).decode()
            if receive[-9:] == 'SEND_STOP':
                break
        print(receive[:-9])
    except Exception as e:  #连接失败
        return e
    try:
        client.send((command+'SEND_STOP').encode())
        receive = ''
        while True:
            receive = receive + client.recv(6).decode()
            if receive[-9:] == 'SEND_STOP':
                break
        receive=json.loads(receive[:-9])
        client.send(('close_connect' + 'SEND_STOP').encode())
        client.close()
        return receive
    except Exception as e:
        client.close()  #记得关闭连接
        return e

if __name__=='__main__':
    # command='searchdriverSPC姓名="戴郑雄"'
    # command='insertdriver"李智敏",2,2.222'
    command='searchdriverALL'
    result=search('localhost', 6666, command)
    print('驾龄  \t姓名  \t反应时间')
    for each in result:
        if isinstance(each, dict):
            for value in each.values():

                print(value,end='\t')
            print()
        elif isinstance(each, str):
            print(each)