package com.flybear.SpringMVC.beans;


import org.springframework.stereotype.Component;
//这是定义登录信息
@Component
public class user {
    private String logname;
    private String logpass;

    public String getLogname() {
        return logname;
    }

    public String getLogpass() {
        return logpass;
    }

    public void setLogname(String logname) {
        this.logname = logname;
    }

    public void setLogpass(String logpass) {
        this.logpass = logpass;
    }
}
