package com.flybear.SpringMVC.handlers;
//这是登录(注册)分发
import com.flybear.SpringMVC.Dao.CheckLogin;
import com.flybear.SpringMVC.Dao.SaveRegister;
import com.flybear.SpringMVC.beans.registor;
import com.flybear.SpringMVC.beans.user;
import org.apache.commons.lang.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
@SessionAttributes(value = {"status","logname","logpass"})
public class login {
    @RequestMapping("/tologin")
    public ModelAndView tologin(ModelMap modelMap, HttpServletRequest httpServletRequest){
        modelMap.addAttribute("status","");
        ModelAndView md=new ModelAndView("login");
        String msg=httpServletRequest.getParameter("message");
        if (msg==null)
            msg="new";
        md.addObject("message",msg);
        return md;
    }

    @Autowired
    CheckLogin CheckLogin;
    @RequestMapping("/login")
    public ModelAndView loginconfirm(user user, ModelMap modelMap){
        String checkresult= CheckLogin.check(user);
        if(checkresult.equals("ojbk")){
            modelMap.addAttribute("status","ojbk");
            modelMap.addAttribute("logname",user.getLogname());
            ModelAndView md=new ModelAndView("redirect:manege");
            return md;
        }
//        if(user.getLogname().equals("flybear") && user.getLogpass().equals("hyggbgb")){
//            modelMap.addAttribute("status","ojbk");
//            modelMap.addAttribute("logname",user.getLogname());
//            return "redirect:manege";
//        }
        else {
            ModelAndView md=new ModelAndView("redirect:tologin");
            md.addObject("message",checkresult);
            return md;
        }

    }

//    @RequestMapping("/toregister")
//    public String toregister(){
//        return "register";
//    }
//
//
//    @Autowired
//    SaveRegister saveRegister;
//    @RequestMapping(value = "/register",produces = "text/html;charset=UTF-8")
//    public @ResponseBody String register(@RequestBody registor registor){
//        String result=saveRegister.save(registor);
//        return result;
//    }
}
