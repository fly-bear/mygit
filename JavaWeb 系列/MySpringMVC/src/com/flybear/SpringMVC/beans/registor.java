package com.flybear.SpringMVC.beans;

import org.springframework.stereotype.Component;
//这是定义注册的信息（弃用）
@Component
public class registor {
    private String id;
    private String pwd;

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
}
