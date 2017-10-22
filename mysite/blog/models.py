from django.db import models
from django.contrib import admin

# Create your models here.
class BlogPost(models.Model):
    STATUS_CHOICES = (
        ('d', '草稿'),
        ('p', '发布'),
    )
    title = models.CharField('标题',max_length = 150)
    body = models.TextField('正文')
    timestamp = models.DateTimeField('发表时间', auto_now=True)
    status = models.CharField('文章状态', max_length=1, choices = STATUS_CHOICES,default='')
    # class Meta:
    #     # Meta 包含一系列选项，这里的 ordering 表示排序，- 号表示逆序。即当从数据库中取出文章时，其是按文章最后一次修改时间逆序排列的。
    #     ordering = ['-last_modified_time']


class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'timestamp')

admin.site.register(BlogPost,BlogPostAdmin)