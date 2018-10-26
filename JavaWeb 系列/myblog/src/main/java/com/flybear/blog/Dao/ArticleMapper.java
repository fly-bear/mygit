package com.flybear.blog.Dao;


import com.flybear.blog.Bean.BeanArticle;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface ArticleMapper{
    @Insert("INSERT INTO article(title,picture,content,date,type)VALUES(#{title},#{picture},#{content},#{date},#{type})")
    void insert(BeanArticle beanArticle);

    @Select("SELECT * FROM article")
    List<Map> getall();

    @Select("SELECT * FROM article where id=#{id}")
    Map getdetail(int id);
}
