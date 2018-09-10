from selenium import webdriver
import time
import re


def get_ss(aim_qq,name):
    #实例化出一个PhantomJS浏览器
    driver = webdriver.PhantomJS(r'D:\phantomjs-2.1.1-windows\bin\phantomjs.exe')
    # driver = webdriver.Firefox()

    driver.get('http://qzone.qq.com')
    #登录表单在页面的框架中，所以要切换到该框架
    driver.switch_to_frame('login_frame')
    #通过使用选择器选择到表单元素进行模拟输入和点击按钮提交
    driver.find_element_by_id('switcher_plogin').click()
    # time.sleep(3)
    driver.find_element_by_id('u').clear()
    driver.find_element_by_id('u').send_keys('951948132')
    driver.find_element_by_id('p').clear()
    driver.find_element_by_id('p').send_keys('hyggbgb12345**')
    driver.find_element_by_id('login_button').click()
    time.sleep(5)
    # driver.implicitly_wait(10)
    driver.switch_to.default_content()#回主框架
    driver.get(r'https://user.qzone.qq.com/'+aim_qq+r'/311')
    time.sleep(3)
    driver.switch_to_frame('app_canvas_frame')
    temp=driver.page_source
    driver.switch_to.default_content()
    a=r'title="末页".*?</span>'
    b=re.compile(a)
    c=re.findall(b,temp)[0]
    a=r'title="末页".*?<span>'
    b=re.compile(a)
    d=re.findall(b,c)
    c=c.replace(d[0],'')
    c = c.replace(r'</span>', '')
    c=int(c)
    pages=[]
    try:
        for i in range(0,c):
            driver.execute_script("var q=document.documentElement.scrollTop=document.body.clientHeight")
            driver.switch_to_frame('app_canvas_frame')
            temp=driver.page_source
            pages.append(temp)
            driver.find_element_by_id('pager_next_'+str(i)).click()
            time.sleep(5)
            driver.switch_to.default_content()
            print(name+' 共'+str(c)+'页，正在爬取第'+str(i+1)+'页......')
    except:
        pass
    # i=1
    # while i<10:
    #     driver.execute_script("var q=document.documentElement.scrollTop=document.body.clientHeight")
    #     # driver.execute_script('window.scrollTo(0, document.body.scrollHeight')
    #     time.sleep(3)
    #     i=i+1
    # driver.execute_script("var q=document.documentElement.scrollTop=0")
    f=open(r'D:\Personal\Desktop\各种python小项目\QQ空间'+'\\'+name+'.html','w+',encoding='utf-8')
    for temp in pages:
        f.writelines(temp)
    f.close()
    driver.quit()
    # soup=BeautifulSoup(a,'lxml')
    # c=soup.find_all('ul',id="feed_friend_list")
    # b=r'user-info.+?</a>'
    # c=re.findall(re.compile(b),a)
    # c=soup.find_all(re.compile(b))
    # print(c)

if __name__=='__main__':
    # aim_qqs = {'玉米':'2262957290',
    #            '我':'951948132',
    #             '东木':'992443086',
    #             '江总':'2694571928',
    #             '施宇琦':'1159436724'
    # '高铖': '664308541',
    # '高晨阳': '331753380'
    # }
    aim_qqs = {'吴麟':'1664780080'}
    keys=aim_qqs.keys()
    for key in keys:
        get_ss(aim_qqs[key],key)