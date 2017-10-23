# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-09 23:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='status',
            field=models.CharField(choices=[('d', '草稿'), ('p', '发布')], default='', max_length=1, verbose_name='文章状态'),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='body',
            field=models.TextField(verbose_name='正文'),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='timestamp',
            field=models.DateTimeField(auto_now=True, verbose_name='发表时间'),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='title',
            field=models.CharField(max_length=150, verbose_name='标题'),
        ),
    ]