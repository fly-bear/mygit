package com.flybear.blog.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/back")
@Controller
public class back {

    @RequestMapping("/addarticle")
    public String addarticle(){
        return "add-article";
    }
}
