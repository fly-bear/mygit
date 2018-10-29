package com.flybear.blog.Dao;

import com.flybear.blog.Bean.BeanUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface UserMapper {
    @Select("SELECT * FROM user where password=#{password} and username=#{username}")
    List<Map> getuser(BeanUser beanUser);
}
