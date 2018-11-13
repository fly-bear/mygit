package com.flybear.blog.Controller;

import com.flybear.blog.Service.ServiceCheckSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class ControllerToBack {
    @RequestMapping("/toback")
    public String go(HttpServletRequest request){
        if(ServiceCheckSession.IsLogged(request))
            return "background";
        else
            return "redirect:tologin";
    }
}
