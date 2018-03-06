package com.flybear.SpringMVC.handlers;


import com.sun.xml.internal.ws.resources.HttpserverMessages;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.ModelAndView;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.print.DocFlavor;
import javax.servlet.http.HttpServletResponse;


@Controller
@SessionAttributes("status")
public class manege {
    @RequestMapping("/manege")
    public ModelAndView manegedata(@ModelAttribute("logname") String logname,@ModelAttribute("status") String status, SessionStatus sessionStatus ){
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
    GetMsg GetMsg;
    @RequestMapping("/search")
    public @ResponseBody List requestjson(@RequestBody MyRequest p){
        ArrayList result=GetMsg.search(p);

        return result;

    }
}
