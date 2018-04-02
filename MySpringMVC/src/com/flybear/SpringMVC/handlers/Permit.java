package com.flybear.SpringMVC.handlers;

import com.flybear.SpringMVC.beans.Myindex;
import com.flybear.SpringMVC.beans.Statu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

//允许上传
@Controller
public class Permit {
    @Autowired
    com.flybear.SpringMVC.Dao.ChangeStatu changeStatu;
    @Autowired
    HttpServletRequest request;
    @RequestMapping(value = "/changestatu",produces="text/html;charset=UTF-8;")
    public @ResponseBody String response(@RequestBody Statu statu) {
        HttpSession httpSession = request.getSession();
        String result="失败！";
        if(httpSession.getAttribute("logname").equals("flybear")){
            switch (statu.getStatu()){
                case "0":result=changeStatu.close();break;
                case "1":result=changeStatu.open();break;
                default:break;
            }
        }
        return result;
    }
}
