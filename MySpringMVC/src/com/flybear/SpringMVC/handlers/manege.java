package com.flybear.SpringMVC.handlers;

//这是后台
import com.flybear.SpringMVC.beans.MyRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;


@Controller
@SessionAttributes(value = {"status","logname","logpass"})
public class manege {
    @RequestMapping("/manege")
    public ModelAndView manegedata(@ModelAttribute("logname") String logname,@ModelAttribute("status") String status){
//        sessionStatus.setComplete();


        if(status.equals("ojbk")){
            ModelAndView md = new ModelAndView("finally");
            md.addObject("logname",logname);
            return md;
        }
        else{
            ModelAndView md2 = new ModelAndView("redirect:tologin");
            return md2;
        }

    }


    @Autowired
    com.flybear.SpringMVC.Dao.GetMsg GetMsg;
    @Autowired
    HttpServletRequest request;
    @RequestMapping("/search")
    public @ResponseBody List requestjson(@RequestBody MyRequest p){
        HttpSession httpSession = request.getSession();
        ArrayList result=GetMsg.search(p,(String) httpSession.getAttribute("logname"));
        return result;

    }

    @Autowired
    com.flybear.SpringMVC.Dao.GetAllMsg getAllMsg;
    @ResponseBody
    @RequestMapping(value = "/detail",produces = "application/json;charset=utf-8")
    public List approve(String spcid){
        return getAllMsg.Getmsg(spcid);
    }

}
