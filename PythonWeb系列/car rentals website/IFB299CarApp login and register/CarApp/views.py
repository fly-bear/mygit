from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.urls import reverse
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from django.http import HttpResponseRedirect

import random
from hashlib import md5
from CarApp import models
import datetime

def homepage(request):
    # context = RequestContext(request)
    if request.session.get('name',False):
        name=request.session.get('name')
    else:
        name='guest'

    headerhtml = '''<h1 class="w3-margin w3-jumbo">Welcome to CRC!</h1>
  <p class="w3-xlarge">Search for cars to rent now.</p>
  <form action="/CarApp/search"><button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Begin your search</button></form>'''
    
    context_dict = {'name': name, 'header': headerhtml, 'footer': ''}
    return render(request,'CarApp/basicTemplate.html',context_dict)
    
@csrf_exempt
def search(request):
    if request.session.get('name',False):
        name=request.session.get('name')
    else:
        name='guest'

    headerhtml = '''<h1 class="w3-margin w3-jumbo">SEARCH</h1>
  <p class="w3-xlarge">Search for cars available to rent:</p>
  <form id="searchForm" action="/CarApp/search" method="POST"> 
  
  <!--Contains a search bar to search a car with.-->
  <input type="text" name="keywords" placeholder="Search...">		
  <input type="submit" value="Search" id="searchButton"><!--Search button.-->

  </form>
  '''
    footerhtml = ""

    if request.method == 'POST':
        query = request.POST['keywords'].strip()

        if query:
            footerhtml += "<H3>showing results for: " + query + "</H3>"
            footerhtml += "<div id = results><ul>"
            result = models.Cars.objects

            title_attr = {'car_seriesyear', 'car_makename', 'car_model', 'car_series', 'car_pricenew'}
    
            for value in result.values():
                entry = ''
                for attr in title_attr:
                    if (value[attr] is not None):
                        entry += value[attr] + " "

                if query.lower() in entry.lower():
                    footerhtml += "<li><a href='/CarApp/carinfo?id=" + str(value['car_id']) + "'>" + entry + "</a></li>"

            footerhtml += "</ul>" 
            footerhtml += "<p>End of results</p></div>"

        else:
            footerhtml = "<div id='results'><p>Please enter a search term</p></div>"

    context_dict = {'name': name, 'header': headerhtml, 'footer': footerhtml}
    return render(request,'CarApp/basicTemplate.html',context_dict)
    # return render_to_response('CarApp/basicTemplate.html', context_dict, context)


def carinfo(request):
    if request.session.get('name',False):
        name=request.session.get('name')
    else:
        name='guest'
    car = models.Cars.objects.get(car_id=int(request.GET['id']))
    dataitems = [[car.car_makename, "Make"], [car.car_model, "Model"], [car.car_series, "Series"], [car.car_seriesyear, "Year"],
                 [car.car_pricenew, "New sale price"], [car.car_enginesize, "Engine Size"], [car.car_fuelsystem, "Fuel"],
                 [car.car_tankcapacity, "Fuel tank capacity"], [car.car_power, "Engine power"], [car.car_seatingcapacity, "Seating Capacity"],
                 [car.car_standardtransmission, "Transmission"], [car.car_bodytype, "Body Type"], [car.car_drive, "Drive Type"], [car.car_wheelbase, "Wheel Base"]]
    header = "<h1 class=\"w3-margin w3-jumbo\">" + car.car_seriesyear + " " + car.car_makename + " " + car.car_model + " " + "</h1>"
    footer = "<input type=button value=\"Back to results\" onClick=\"javascript:history.go(-1);\"><p><table align=\"center\">"
    for dataitem in dataitems:
        footer += "<tr><th align=\"right\">" + dataitem[1] + "</th><td>" + str(dataitem[0]) + "</td></tr>\n"
    footer +="</table>"
    context = {'name': name, 'header': header, 'footer': footer}
    return render(request, 'CarApp/basicTemplate.html', context)
def register(request):
    return render(request,'CarApp/register.html')


@csrf_exempt
def check_register(request):
    user_info={}
    temp=models.Customer.objects.values_list('customer_id')
    user_info['customer_id']=int([x[0] for x in temp][-1])+1
    user_info['customer_name']=request.POST['account']
    #user_info['customer_password']=request.POST['password']
    user_info['customer_address']=request.POST['address']
    user_info['customer_birthday']=datetime.date(int(request.POST['year']),int(request.POST['month']),int(request.POST['day']))
    user_info['customer_gender']='%c'%'M'if (request.POST['gender']=='male') else '%c'%'F'
    user_info['customer_occupation']=request.POST['occupation']
    user_info['customer_phone']=request.POST['phone']
    user_info['customer_state']=request.POST['state']

    chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
    salt=''
    for i in range(20):
        salt += chars[random.randint(0,len(chars)-1)]

    new_pwd = md5()
    new_pwd.update((request.POST['password']+salt).encode('utf-8'))
    user_info['customer_password'] = new_pwd.hexdigest()
    user_info['customer_salt'] = salt


    try:
        message = 'Register succeeded!\nYour id is:   '+str(models.Customer.objects.create(**user_info).pk)+'    .Please remember it!'
    except Exception as e:
        print(e)
        message = 'Register failed! Please try again'
    return HttpResponse(message)


def login(request):
    if request.session.get('name',False):
        return render(request, 'CarApp/basicTemplate.html',{'name':request.session.get('name')})
    else:
        return render(request,'CarApp/login.html')


@csrf_exempt
def checklogin(request):
    id=request.POST.get('id')
    password=request.POST.get('password')
    result=models.Customer.objects.filter(customer_id=id)
    if result.values().count()>=1:
        salt = result.values()[0]['customer_salt']
        test_pwd = md5()
        test_pwd.update((password+str(salt)).encode('utf-8'))
        if test_pwd.hexdigest() == result.values()[0]['customer_password']:
            request.session['id']=id
            request.session['name']=result.values('customer_name')[0]['customer_name']
            message='succeed'
        else:
            message = 'failed'
    else:
        message = 'failed'
    return HttpResponse(message)

def logout(request):
    request.session.flush()
    return render(request,'CarApp/login.html')

def contact(request):
    return render(request,'CarApp/contact.html')


def account(request):
    if request.session.get('name',False):
        id=request.session.get('id')
    else:
        return HttpResponseRedirect('/CarApp')
    result = models.Customer.objects.filter(customer_id=id)
    name = result.values()[0]['customer_name']
    address = result.values()[0]['customer_address']
    phone = result.values()[0]['customer_phone']

    headerhtml = '''<h1 class="w3-margin w3-jumbo">Welcome to CRC!</h1>
      <p class="w3-xlarge">Search for cars to rent now.</p>
      <form action="/CarApp/search"><button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Begin your search</button></form>'''

    message = {'name': name, 'address': address, 'phone': phone, 'header': headerhtml, 'footer': ''}
    return render(request, 'CarApp/account.html', message)


@csrf_exempt
def changepwd(request):
    id = request.session.get('id')
    result = models.Customer.objects.filter(customer_id=id)
    password = result.values()[0]['customer_password']
    temp_old = request.POST.get('old_pwd')
    temp_new = request.POST.get('new_pwd')
    salt = result.values()[0]['customer_salt']
    test_pwd = md5()
    test_pwd.update((temp_old + str(salt)).encode('utf-8'))
    if test_pwd.hexdigest() == password:
        test_pwd = md5()
        test_pwd.update((temp_new + str(salt)).encode('utf-8'))
        models.Customer.objects.filter(customer_id=id).update(customer_password=test_pwd.hexdigest())
        request.session.flush()
        return HttpResponse('succeed!')
    else:
        return HttpResponse('failed!')


@csrf_exempt
def changeaddr(request):
    addr = request.POST.get('new_addr')
    id = request.session.get('id')
    models.Customer.objects.filter(customer_id=id).update(customer_address=addr)
    result = models.Customer.objects.filter(customer_id=id)
    if result.values()[0]['customer_address'] == addr:
        return HttpResponse("succeed!")
    else:
        return HttpResponse("failed!")


@csrf_exempt
def changephone(request):
    phone = request.POST.get('new_phone')
    id = request.session.get('id')
    models.Customer.objects.filter(customer_id=id).update(customer_phone=phone)
    result = models.Customer.objects.filter(customer_id=id)
    if result.values()[0]['customer_phone'] == phone:
        return HttpResponse("succeed!")
    else:
        return HttpResponse("failed!")