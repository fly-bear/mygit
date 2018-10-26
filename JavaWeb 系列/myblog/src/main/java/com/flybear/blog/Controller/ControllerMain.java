package com.flybear.blog.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerMain {

    @RequestMapping("/")
    public String rootpage(){
        return "redirect:mainpage";
    }

    @RequestMapping("/mainpage")
    public String mainpage(){
        return "index";
    }
}
