# coding=utf-8
import requests
from bs4 import BeautifulSoup
import csv
import getpass
import os
import lxml

userName = input('请输入学号：')

while len(userName) != 13 or userName[:3] != '012':
    userName = input('学号有误，请重新输入：')
password = getpass.getpass("请输入密码(输入时将不会显示)：")
while password =='':
    password = getpass.getpass("请输入密码(输入时将不会显示)：")
# userName='0121511371128'
# password='dzx********'
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
    raise selfException("登陆不上咯！")
print(temp)