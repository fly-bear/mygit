import hashlib
import requests
import random

appid = '01e625e747188841'
appKey = 'X6OyKvqaBz6XlQ0Nk58iLpUP3R9Hour1'

para={'q':'','from':'','to':'','appKey':appid,'salt':'','sign':''}
httpClient = None
myurl = 'http://openapi.youdao.com/api'
while True:
	q = input()
	if ord(q[0])not in range(97,122) and ord(q[0]) not in range(65,90):
		fromLang = 'zh-CHS'
		toLang = 'en'
	else:
		fromLang = 'en'
		toLang = 'zh-CHS'
	salt = random.randint(32768, 65536)
	sign = appid+q+str(salt)+appKey
	m1 = hashlib.md5()
	m1.update(sign.encode('utf-8'))
	sign = m1.hexdigest()
	#myurl = myurl+'?appid='+appid+'&q='+q+'&from='+fromLang+'&to='+toLang+'&salt='+str(salt)+'&sign='+sign
	para['from']=fromLang
	para['to']=toLang
	para['q']=q
	para['salt']=salt
	para['sign']=sign
	a=requests.get(myurl,params=para).json()
	print(a)
	print('\n')
	for temp in a['translation']:
		print(temp)
	print('\n')
	try:
		for temp in a['web']:
			for ttemp in temp['value']:
				print(ttemp,end=',')
			print('['+temp['key']+']')
	except:
		pass
	print('\n')
	try:
		temp = a['basic']
		for ttemp in temp['explains']:
			print(ttemp)
	except:
		pass
	print('\n')
	try:
		if fromLang =='zh-CHS':
			print('拼音：'+temp['phonetic'])
		else:
			print('英式音标：'+temp['uk-phonetic'])
			print('美式音标：' + temp['us-phonetic'])
	except:
		pass
	print('-'*100)
