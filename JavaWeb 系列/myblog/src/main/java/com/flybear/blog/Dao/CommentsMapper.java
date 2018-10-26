package com.flybear.blog.Dao;

import com.flybear.blog.Bean.BeanComment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface CommentsMapper {

    @Select("SELECT * FROM comments where article_id=#{id}")
    List<Map> getcomments(int id);

    @Insert("INSERT INTO comments(article_id,content,reply,replied,name,email,website,date)" +
            "VALUES(#{articleid},#{content},#{reply},#{replied},#{name},#{email},#{website},#{date})")
    void addcomment(BeanComment beanComment);
}
