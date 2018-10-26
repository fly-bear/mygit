package com.flybear.blog.Dao;

import com.flybear.blog.Bean.BeanArticle;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;


@Repository
public class DaoNewArticle {

    @Resource
    private ArticleMapper articleMapper;

    public void save(BeanArticle beanArticle){
        articleMapper.insert(beanArticle);
    }
}
