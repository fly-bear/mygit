package com.flybear.blog.Controller;

import com.flybear.blog.Service.ServiceCheckLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class checklogin {
    @Autowired
    ServiceCheckLogin serviceCheckLogin;
    @RequestMapping("/checklogin")
    public ModelAndView check(@RequestParam String name,@RequestParam String password){
        Boolean result = serviceCheckLogin.check(name,password);
        ModelAndView md;
        if (result) {
            md = new ModelAndView("back");
        }else {
            md = new ModelAndView("forward:/bearlogin");
        }
        return md;
    }
}
