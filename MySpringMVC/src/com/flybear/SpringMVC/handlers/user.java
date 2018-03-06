package com.flybear.SpringMVC.handlers;


import org.springframework.stereotype.Component;

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
