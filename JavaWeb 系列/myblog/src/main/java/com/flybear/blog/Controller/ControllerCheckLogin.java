package com.flybear.blog.Controller;

import com.flybear.blog.Bean.BeanUser;
import com.flybear.blog.Service.ServiceCheckLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class ControllerCheckLogin {
    private ServiceCheckLogin serviceCheckLogin;
    @Autowired
    public ControllerCheckLogin(ServiceCheckLogin serviceCheckLogin,BeanUser beanUser){
        this.serviceCheckLogin = serviceCheckLogin;
    }
    @RequestMapping("/checklogin")
    public String check(BeanUser beanUser, HttpServletRequest request){
        return serviceCheckLogin.check(request,beanUser)?"succeed":"failed";
    }
}
