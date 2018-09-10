import requests

url='http://dict-co.iciba.com/api/dictionary.php'
key='574B59474B7E8649AF2D3E0396E40E36'
type='json'
data={'key':key,'type':type,'w':''}
while True:
	w=input()
	data['w']=w
	response=requests.get(url,params=data).json()
	print(response)