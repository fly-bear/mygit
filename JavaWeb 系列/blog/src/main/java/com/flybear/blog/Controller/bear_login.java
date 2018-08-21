package com.flybear.blog.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class bear_login {
    @RequestMapping("/bearlogin")
    String login(){
        return "login";
    }
}
