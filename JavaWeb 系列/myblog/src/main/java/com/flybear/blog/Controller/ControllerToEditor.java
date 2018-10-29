package com.flybear.blog.Controller;

import com.flybear.blog.Service.ServiceCheckSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class ControllerToEditor {
    @RequestMapping("/editor")
    public String toeditor(HttpServletRequest request){
        if(ServiceCheckSession.IsLogged(request))
            return "editor";
        else
            return "redirect:tologin";
    }
}
