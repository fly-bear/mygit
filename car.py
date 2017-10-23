import paramiko
import time
import threading
import sys

def ssh_connect( _host, _username, _password ,_port):
    try:
        _ssh_fd = paramiko.SSHClient()
        _ssh_fd.set_missing_host_key_policy( paramiko.AutoAddPolicy() )
        _ssh_fd.connect( _host, username = _username, password = _password ,port=_port)
    except Exception as e:
        print( 'ssh %s@%s: %s' % (_username, _host, e) )
        exit()
    return _ssh_fd

def ssh_close( _ssh_fd ):
   _ssh_fd.close()
   
def ssh_exec_cmd( _ssh_fd, _cmd ):
    return _ssh_fd.exec_command( _cmd )

def login():
    hostname = '106.15.199.206'  #登录信息
    port = 6666
    username = 'pi'
    password = 'raspberry'
    sshd = ssh_connect(hostname, username, password, port)
    return sshd

def do(sshd,cmd):
    a = time.clock()
    stdin, stdout, stderr = ssh_exec_cmd( sshd, cmd )
    b = time.clock()
    print(b - a)
    err_list = stderr.readlines()

    if len( err_list ) > 0:
        print ('ERROR:' + err_list[0])
        exit()

    for item in stdout.readlines():
        print (item,)

def get_command():
    global use,sshd
    command0 = input('输入命令\n')
    if command0=='e':
        ssh_close(sshd)
    elif command0 == 're':
        sshd=login()
    elif command0 == 'c':
        sys.exit()
    else:
        command='echo '+command0+' > /dev/ttyUSB1'
        flag = 1
        use = [command, flag]


def send_command():
    global use,lock
    # while True:
        # lock.acquire()
    do(sshd, use[0])
    use[1] = 0
        # lock.release()
def main():
    pass
if __name__ == "__main__":
    # cmd = 'hostname\nps\ndf -m'  # 执行命令cmd = 'hostname\nps\ndf -m'#执行命令
    global use, sshd
    sshd=login()
    use=['',0]
    # thread1=threading.Thread(target=get_command(),name='thread1')
    # thread2=threading.Thread(target=send_command(),name='thread2')
    # thread2.start()
    while True:
        try:
            if use[1]==1:
                send_command()
            elif use[1]==0:
                get_command()
        except:
            use = ['', 0]
    # thread1.start()    #  thread1.join()
    # thread2.join()
    ssh_close(sshd)
