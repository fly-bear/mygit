import pymysql

def search():
    db = pymysql.connect('localhost', 'root', 'hyggbgb', 'flybear', charset='utf8')
    cursor = db.cursor(cursor=pymysql.cursors.DictCursor)
    choise=input('请选择查询方式：\n按ID查询：0\n按姓名查询：1\n查询全部：2\n>>')
    if choise=='0':
        cursor.execute('select * from test where ID=%s',input('请输入ID\n>>'))
    elif choise=='1':
        cursor.execute('select * from test where name=%s',input('请输入姓名：\n>>'))
    elif choise=='2':
        cursor.execute('select * from test')
    data=cursor.fetchall()
    return data

def exe(sql):
    try:
        db = pymysql.connect('localhost', 'root', 'hyggbgb', 'flybear', charset='utf8')
        cursor = db.cursor(cursor=pymysql.cursors.DictCursor)
        result=cursor.execute(sql)
        db.commit()
        data=cursor.fetchall()
        return [data,result]
    except Exception as e:
        print(e)
if __name__=='__main__':
    result=search()
    for each in result:
        print(str(each['ID'])+'\t'+each['name']+' \t'+str(each['status']))