import requests

url = 'http://data.stats.gov.cn/search.htm'
data = {'db': '',
        'm': 'searchdata',
        'p': '0',
        's': '北京国民生产总值'  # 设置搜索关键词
        }
maxpage=20
def go():
    result = []
    for i in range(0, maxpage):  # 设置获取结果页数
        data['p'] = str(i)
        a = requests.get(url, params=data).json()['result']
        result = result + a
    use = []
    for i in result:
        use.append([i['data'], i['reg'], i['sj'], i['zb']])
    # f = open(r'd:\personal\desktop\GDP.txt', 'w')  # 设置保存文件名
    # for i in use:
    #     f.write(i[0].ljust(15) + '\t' + i[1].ljust(15) + '\t' + i[2].ljust(15) + '\t' + i[3] + '\r\n')
    # f.close()
    return use