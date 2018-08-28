package com.flybear.blog.Service;

import com.flybear.blog.Dao.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ServiceCheckLogin {

    @Autowired
    Select select;
   public Boolean check(String name,String password){//此处才规定参数必须两个
       Map<String,Object> para = new HashMap();
       para.put("name",name);
       para.put("password",password);
       List result=select.select(para);
       return result.size()>0;
    }
}
