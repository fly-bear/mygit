import smtplib
from email.mime.text import MIMEText

def send(receivers,neirong):
    #设置服务器所需信息
    #163邮箱服务器地址
    mail_host = 'smtp.sohu.com'
    #163用户名
    mail_user = '15257822881@sohu.com'
    #密码(部分邮箱为授权码)
    mail_pass = 'hyggbgb12345*'
    #邮件发送方邮箱地址
    sender = '15257822881@sohu.com'
    #邮件接受方邮箱地址，注意需要[]包裹，这意味着你可以写多个邮件地址群发

    #设置email信息
    #邮件内容设置
    message = MIMEText(neirong,'plain','utf-8')
    #邮件主题
    message['Subject'] = '有新成绩辣~\(≧▽≦)/~'
    #发送方信息
    message['From'] = sender
    #接受方信息
    message['To'] = ','.join(receivers)

    #登录并发送邮件
    try:
        smtpObj = smtplib.SMTP()
        #连接到服务器
        smtpObj.connect(mail_host,25)
        #登录到服务器
        smtpObj.login(mail_user,mail_pass)
        #发送
        smtpObj.sendmail(
            sender,receivers,message.as_string())
        #退出
        smtpObj.quit()
        print('success')
    except smtplib.SMTPException as e:
        print('error',e) #打印错误

if __name__=='__main__':
    neirong='又双叒叕是一次测试呀！'
    receivers=['dzx518@whut.edu.cn','1261422271@qq.com']
    send(receivers,neirong)
