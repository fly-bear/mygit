package com.wind.beans;


import org.springframework.stereotype.Component;

@Component
public class User {
    String logname,logpwd,confirm_password,identity;

    public String getIdentity() {
        return identity;
    }

    public void setIdentity(String identity) {
        this.identity = identity;
    }

    public String getConfirm_password() {
        return confirm_password;
    }

    public void setConfirm_password(String confirm_password) {
        this.confirm_password = confirm_password;
    }

    public String getLogname() {
        return logname;
    }

    public void setLogname(String logname) {
        this.logname = logname;
    }

    public String getLogpwd() {
        return logpwd;
    }

    public void setLogpwd(String logpwd) {
        this.logpwd = logpwd;
    }
}
