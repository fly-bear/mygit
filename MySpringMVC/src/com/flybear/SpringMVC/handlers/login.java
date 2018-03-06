package com.flybear.SpringMVC.handlers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("status")
public class login {
    @RequestMapping("/tologin")
    public String tologin(ModelMap modelMap){
        modelMap.addAttribute("status","");
        return "login";
    }

    @RequestMapping("/login")
    public String loginconfirm(user user,ModelMap modelMap){
        if(user.getLogname().equals("flybear") && user.getLogpass().equals("hyggbgb")){
            modelMap.addAttribute("status","ojbk");
            modelMap.addAttribute("logname",user.getLogname());
            return "redirect:manege";
        }
        else {
            return "redirect:tologin";
        }

    }
}
