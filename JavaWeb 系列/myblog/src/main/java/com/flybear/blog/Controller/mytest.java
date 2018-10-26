package com.flybear.blog.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class mytest {
    @RequestMapping("/test")
    public String test(){
        return "test";
    }
}
