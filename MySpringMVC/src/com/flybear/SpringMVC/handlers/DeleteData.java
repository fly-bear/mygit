package com.flybear.SpringMVC.handlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.flybear.SpringMVC.beans.Myindex;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class DeleteData {

    @Autowired
    com.flybear.SpringMVC.Dao.DeleteMsg deleteMsg;
    @Autowired
    HttpServletRequest request;
    @RequestMapping("/delete")
    public @ResponseBody String response(@RequestBody Myindex spcid){
//        System.out.println(spcid.getIndex());
        String[] administrator={"flybear","自动化1501","自动化1502","自动化1503",
                "自动化1504","自动化1505","自动化zy1501","电气1501","电气1502","电气1503","电气1504","电气1505","电气1506","电气zy1501"};
        HttpSession httpSession = request.getSession();
        String result;
        int flag=0;
        for(String each:administrator){
            if(each.equals(httpSession.getAttribute("logname"))){
                flag=1;
                break;
            }
        }
        if (flag==1) {
             result= deleteMsg.delete(spcid.getIndex());
        }else{
            result="权限不足！";
        }
        return result;
    }
}
