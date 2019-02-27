package com.petrochina.weixin.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Upload {
    @RequestMapping("upload")
    public String upload(){
        return "upload";
    }
}
