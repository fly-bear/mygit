import requests
url1='https://fm.qq.com/webapp/json/fm_vkey/GetVkey?g_tk=5381&guid=10000&inCharset=utf-8&outCharset=utf-8'
url2='http://ws.stream.fm.qq.com/vfm.tc.qq.com/R196002YpWzb0w69OB.m4a'
vkey=requests.get(url1).json()['data']['vkey']
params={'fromtag':'36',
        'guid':'10000',
        'vkey':vkey}
response=requests.get(url2,params=params)
with open('2.mp4', 'wb') as file:
        for data in response.iter_content(128):
                file.write(data)
