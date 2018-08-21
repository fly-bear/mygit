import requests
import time

sign_in_url='http://59.69.102.9/zgyw/index.aspx'
data={
    'ctl00$ContentPlaceHolder1$name':'0121611380433',
    'ctl00$ContentPlaceHolder1$pwd':'0121611380433',
    'ctl00$ContentPlaceHolder1$login':'登录',
    '__VIEWSTATE':r'/wEPDwULLTIxMTE3OTcxMDcPZBYCZg9kFgICAw9kFgQCAw9kFgICBQ8WAh4LXyFJdGVtQ291bnQCBRYKAgEPZBYCZg8VAwIzNlrlhbPkuo4yMDE3LTIwMTjlrablubTnrKzkuIDlrabmnJ/jgIrkuK3lm73or63mlofjgIvlnKjnur/ogIPor5Xnu5/liIbmiKrmraLml7bpl7TnmoTpgJrnn6USMjAxNy82LzE1IDE2OjIwOjAxZAICD2QWAmYPFQMCMzVp5YWz5LqOMjAxNi0yMDE35a2m5bm056ys5LqM5a2m5pyf44CK5Lit5Zu96K+t5paH44CL5Zyo57q/6ICD6K+V77yI5q+V5Lia55Sf77yJ57uf5YiG5oiq5q2i5pe26Ze055qE6YCa55+lETIwMTcvMy83IDEwOjI5OjQwZAIDD2QWAmYPFQMCMzRa5YWz5LqOMjAxNi0yMDE35a2m5bm056ys5LqM5a2m5pyf44CK5Lit5Zu96K+t5paH44CL5Zyo57q/6ICD6K+V57uf5YiG5oiq5q2i5pe26Ze055qE6YCa55+lEjIwMTcvMS8xNiAxMTo0Mjo1MWQCBA9kFgJmDxUDAjMzWuWFs+S6jjIwMTYtMjAxN+WtpuW5tOesrOS4gOWtpuacn+OAiuS4reWbveivreaWh+OAi+WcqOe6v+iAg+ivlee7n+WIhuaIquatouaXtumXtOeahOmAmuefpRIyMDE2LzEwLzI1IDk6MzY6MzdkAgUPZBYCZg8VAwIzMVrlhbPkuo4yMDE1LTIwMTblrablubTnrKzkuozlrabmnJ/jgIrkuK3lm73or63mlofjgIvlnKjnur/ogIPor5Xnu5/liIbmiKrmraLml7bpl7TnmoTpgJrnn6URMjAxNi8zLzI4IDk6MzE6MDNkAgQPDxYCHgRUZXh0BQgxMDQ3MzUxOGRkZJDjpMWpQb2OuAXT6DvUVKT2Z8sm'
}

s=requests.session()
response=s.post(sign_in_url,data=data)
url2='http://59.69.102.9/zgyw/study/LearningContent.aspx'
data2={
'type':'1',
'id':'1',
'learningid':'3073'
}
articles=['3073','3074','3075','3076','3077','3078','3079','3080','3081']
while True:
    for article in articles:
        data2['learningid']=article
        response=s.get(url2,params=data2)
        print(response.text)
        time.sleep(20)
# response=s.get('http://59.69.102.9/zgyw/index.aspx')
