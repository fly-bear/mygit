package com.flybear.blog.Service;

import com.flybear.blog.Bean.BeanArticle;
import com.flybear.blog.Dao.DaoNewArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class ServiceNewArticle {

    private DaoNewArticle daoNewArticle;

    @Autowired
    public ServiceNewArticle(BeanArticle beanArticle, DaoNewArticle daoNewArticle){
        this.daoNewArticle=daoNewArticle;
    }

    public String save(BeanArticle beanArticle){
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = df.format(new Date());
        beanArticle.setDate(date);

        daoNewArticle.save(beanArticle);
        return "ok";
    }
}
