import requests
import random

url = 'https://www.ele.me/restapi/shopping/restaurants'
para = {'extras[]': 'activities',
        'geohash': 'wt3mdh3fuq8',
        'latitude': '30.5219',
        'limit': '24',
        'longitude': '114.34829',
        'offset': '0',
        'terminal': 'web'
        }
restaurants=[]
for i in range(0,10):
        para['offset']=str(i*24)
        a=requests.get(url,params=para).json()
        for each in a:
                hds=[]
                for hd in each['activities']:
                        hds.append(hd['description'])
                restaurants.append([each['name'],str(float(each['distance']/1000))+'km',each['float_delivery_fee'],each['float_minimum_order_amount']]+hds)
for each in restaurants:
        print(each[0]+'\t'+each[1])
        print('配送费¥'+str(each[2])+'|'+'起送价¥'+str(each[3]))
        print(each[4:])
        print('-'*100)
