package com.flybear.blog.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerToEditor {
    @RequestMapping("/editor")
    public String toeditor(){
        return "editor";
    }
}
