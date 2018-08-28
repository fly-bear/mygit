package com.flybear.blog.Dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository("Select")
public class Select implements select_interface{

    @Autowired
    SqlSessionTemplate sqlSessionTemplate;
    public List select(Map para){//不规定参数数量，也是减少耦合。参数数量由service控制，可实现不同功能
        List result;
        result=sqlSessionTemplate.selectList("mybatis.select_user",para);
        return result;
    }
}
