import requests
from bs4 import BeautifulSoup
import re
import threading
import time

stime=time.clock()
pre_url = 'http://59.69.102.20:81/meol/homepage/common/'  # 访问首页，获取logintoken
login_url = 'http://59.69.102.20:81/meol/loginCheck.do'  # 登陆
choise_url = 'http://59.69.102.20:81/meol/jpk/course/layout/newpage/index.jsp'  # 选择课程
url = 'http://59.69.102.20:81/meol/common/hw/student/hwtask.jsp'  # 获取作业列表
course={'7496':'Photoshop数码合成与欣赏','8009':'微机原理与接口技术'}
para = {'tagbug': 'client',
        'strStyle': 'new06'}
choise_courses=['8009','7496']
def ksgo(each_course):
    choise_para = {'courseId':each_course}  # 课程id photoshop:7496  微机：8009

    s = requests.Session()

    ##获取logintoken##
    a = s.get(pre_url).text
    # aa=BeautifulSoup(a,'lxml')
    # b=aa.find_all('input',name="logintoken")
    b = r'<.+?logintoken.+?>'
    c = re.compile(b)
    d = c.findall(a)
    b = r'value=".+?"'
    c = re.compile(b)
    e = c.findall(d[0])
    logintoken = e[0][7:-1]

    ##登陆##
    data = {'logintoken': logintoken,
            'IPT_LOGINUSERNAME': '0121511371128',
            'IPT_LOGINPASSWORD': '0121511371128'}
    temp = ''
    flag = 0
    while temp == '' and flag < 20:
        temp = s.post(login_url, data=data).text
        flag = flag + 1

    ##选择课程##
    choise = s.get(choise_url, params=choise_para)

    ##获取作业表格##
    temp = ''
    flag = 0
    while temp == '' and flag < 20:
        a = s.get('http://59.69.102.20:81/meol/common/hw/student/hwtask.jsp?tagbug=client&strStyle=template').text
        flag = flag + 1
    # print(a)

    ##处理作业数据##
    soup = BeautifulSoup(a, 'lxml')
    trs = soup.find_all('tr')

    hang = []
    for each in trs:
        # print(each)
        # print('-'*100)
        # lie=[]
        items = each.find_all('a', class_='enter')
        hang.append(items)
    hang.pop(0)
    print(hang)
    # for i in hang:
    #         print(i[5])

    ##发邮件##
    for check in hang:
        if check:
            import sendmail
            sj=str(time.clock())
            sendmail.neirong='傻鸡，你的课程'+course[choise_para['courseId']]+'有作业要做了，还不赶紧！'+sj
            sendmail.send()
            break
if __name__ == '__main__':#使用多线程以节约时间
    threads=[]
    for each in choise_courses:
        t = threading.Thread(target=ksgo,args=(each,))
        threads.append(t)
    for each_thread in threads:
        each_thread.setDaemon(True)
        each_thread.start()

    for each_thread in threads:
        each_thread.join()
etime=time.clock()
print(etime-stime)