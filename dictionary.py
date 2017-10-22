import hashlib
import requests
import random

appid = '20171022000090226'
secretKey = 'S3r7aSwezUsDE8pauoeN'

 
httpClient = None
myurl = 'http://api.fanyi.baidu.com/api/trans/vip/translate'
while True:
	q = input()
	if ord(q[0])not in range(97,122) and ord(q[0]) not in range(65,90):
		fromLang = 'zh'
		toLang = 'en'
	else:
		fromLang = 'en'
		toLang = 'zh'
	salt = random.randint(32768, 65536)
	sign = appid+q+str(salt)+secretKey
	m1 = hashlib.md5()
	m1.update(sign.encode('utf-8'))
	sign = m1.hexdigest()
	myurl = myurl+'?appid='+appid+'&q='+q+'&from='+fromLang+'&to='+toLang+'&salt='+str(salt)+'&sign='+sign
	pass
	a=requests.get(myurl).json()
	print('\n'+a['trans_result'][0]['dst']+'\n\n---------------------------')