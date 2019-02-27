package com.petrochina.weixin.Dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.Map;

@Mapper
public interface testDao {
    @Select("select * from test1")
    Map getdata();
}
