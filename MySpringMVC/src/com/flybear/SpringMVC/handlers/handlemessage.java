package com.flybear.SpringMVC.handlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class handlemessage {
    @Autowired
    private SaveMsg SaveMsg;

    @RequestMapping("/handlemessage")
    public ModelAndView handle(message msg, @RequestHeader("Referer") String referer){
        if(referer.equals("http://bear.flybear.wang:8080/form")) {
//        if(referer.equals("http://localhost:8080/form")) {
            System.out.println(msg.getLeavetime());

            String result = SaveMsg.SaveMessage(msg);
            ModelAndView mad = new ModelAndView("ojbk");
            mad.addObject("message", result);
            return mad;
        }
        else {
            return new ModelAndView("ojbk").addObject("message","错误，请重新提交");
        }
    }

}
