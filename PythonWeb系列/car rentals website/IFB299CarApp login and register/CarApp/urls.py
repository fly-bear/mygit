from django.conf.urls import url
from CarApp import views

urlpatterns = [
    url(r'^$', views.homepage, name='homepage'),
    url(r'^search', views.search, name='search'),
    url(r'^carinfo', views.carinfo, name='carinfo'),
    url(r'^register',views.register,name='register'),
    url(r'^checkregister',views.check_register,name='check_register'),
    url(r'^login',views.login,name='login'),
    url(r'^checklogin',views.checklogin,name='checklogin'),
    url(r'^logout',views.logout,name='logout'),
    url(r'^contact',views.contact,name='contact'),
    url(r'^account', views.account, name='account'),
    url('^changepwd',views.changepwd,name='changepwd'),
    url('^changeaddr', views.changeaddr, name='changeaddr'),
    url('^changephone', views.changephone, name='changephone'),

]

