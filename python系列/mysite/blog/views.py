from django.shortcuts import *
from django.http import HttpResponse
from blog.models import BlogPost
from blog.views import *

# Create your views here.
def myBlogs(request):
    blog_list = BlogPost.objects.filter()
    return render_to_response('BlogTemplate.html',{'blog_list':blog_list})