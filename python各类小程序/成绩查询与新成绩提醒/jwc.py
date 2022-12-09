# coding=utf-8
import requests
from bs4 import BeautifulSoup
import csv
import getpass
import os
import lxml
import datetime

# userName = input('请输入学号：')

# while len(userName) != 13 or userName[:3] != '012':
    # userName = input('学号有误，请重新输入：')
# password = getpass.getpass("请输入密码(输入时将不会显示)：")
# while password =='':
    # password = getpass.getpass("请输入密码(输入时将不会显示)：")
class selfException(BaseException):  # 继承BaseException类实现自定义异常类
    def __init__(self, mesg="raise a selfException"):
        print(mesg)

def get_score(userName,password):
    s = requests.session()
    # 先登陆
    url1 = 'http://sso.jwc.whut.edu.cn/Certification/login.do'
    data1 = {'systemId': '',
             'xmlmsg': '',
             'userName': userName,
             'password': password,
             'type': 'xs',
             'imageField.x': '71',
             'imageField.y': '22'}
    temp = ''
    flag = 0
    while temp == '' and flag < 20:
        temp = s.post(url1, data=data1).text
        flag = flag + 1
    if flag >= 20:
        raise selfException("登陆不上咯！")       #抛出异常
    # print(temp)

    # 获得snkey
    temp = ''
    flag = 0
    while temp == '' and flag < 20:
        score = s.get('http://202.114.90.180/Score')
        temp = score.text
        flag = flag + 1
    if flag >= 20:
        raise selfException("进♂入成绩页面失败")        #抛出异常
    # print(temp+str(flag))
    a1 = temp.find('" target="navTab">成绩查询</a></li>')
    a2 = temp.find('snkey=')
    snkey = temp[a2 + 6:a1]

    # 得到成绩
    pra = {'snkey': snkey,
           'pageNum': '1',
           'numPerPage': '200',
           'xh': '0121511371128',
           'xn': '',
           'xnxq': '',
           'nj': '',
           'xydm': '',
           'zydm': '',
           'bjmc': '',
           'kcmc': '',
           'kcdm': '',
           'xslb': '',
           'kcxz': '',
           'jsxm': ''}
    url2 = 'http://202.114.90.180/Score/lscjList.do'
    # my_score = s.get(url2, params=pra)
    # print(my_score.text)
    temp = ''
    flag = 0
    while temp == '' and flag < 20:
        my_score = s.post(url2, data=pra)
        temp = my_score.text
        flag = flag + 1
    if flag >= 20:
        raise selfException("获取成绩失败")       #抛出异常
    soup = BeautifulSoup(temp, 'lxml')
    trs = soup.find_all('tr')
    # print(trs)
    ulist = []
    for tr in trs:
        ui = []
        for td in tr:
            ui.append(td.string)
        ulist.append(ui)
    # print(ulist)
    final_score = []
    ulist.pop(0)
    ulist.pop(0)
    for hang in ulist:
        lesson = hang[5]
        scores = hang[13]
        if len(lesson) < 14:
            if len(lesson) < 14:
                lesson = lesson + ' ' * ((14 - len(lesson)) * 2)
        final_score.append(lesson + ' ' + scores)
    for scoreo in final_score:
        print(scoreo)
    return final_score


def check(newscore):
    with open('/home/flybear/Desktop/mygit/各种python小项目/成绩查询与新成绩提醒/myscore.txt','r') as f:
        oldscore=f.read()
    if oldscore==newscore:
        return False
    else:
        return True     #发生了更新

if __name__=='__main__':
    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    userName = '0121511371128'
    password = 'dzx********
    receivers = ['dzx518@whut.edu.cn','1261422271@qq.com','15257822881@sohu.com']
    myscore=get_score(userName, password)
    myscore2=str(myscore)
    if check(myscore2):
    #if True:
        with open('/home/flybear/Desktop/mygit/各种python小项目/成绩查询与新成绩提醒/myscore.txt','w') as f:
            f.write(myscore2)
        import sendmail
        neirong='\n'.join(myscore)
        neirong=now+'\n'+neirong
        sendmail.send(receivers,str(neirong))
        #sendmail.send(receivers,'测试啊测试我')
        print(neirong+'\n'+now)
    else:
        print("No new scores!\n"+now)
