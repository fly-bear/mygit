package com.wind.Controller;


import com.wind.Dao.GetMsg;
import com.wind.Service.GetMD;
import com.wind.beans.AllMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class guests {

    @Autowired
    GetMD getMD;
    @Autowired
    HttpServletRequest httpServletRequest;
    @RequestMapping("/visit")
    public ModelAndView visit(){
        HttpSession httpSession=httpServletRequest.getSession();
        String test=(String) httpSession.getAttribute("identity");
        if(httpSession.getAttribute("identity").equals("user") || httpSession.getAttribute("identity").equals("admin")) {
            ModelAndView md = new ModelAndView("visit");
            md = getMD.setmd(md);
            md.addObject("name",httpSession.getAttribute("logname"));
            return md;
        }else {
            ModelAndView md = new ModelAndView("redirect:login");
            md.addObject("identity","illegal");
            return md;
        }

    }
}
