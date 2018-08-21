package com.flybear.SpringMVC.handlers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.flybear.SpringMVC.Dao.ChangeMSG;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
//这是审批
@Controller
public class ChangeStatus {


    @Autowired ChangeMSG changeMSG;
    @Autowired HttpServletRequest request;
    @ResponseBody
    @RequestMapping(value = "/approve",produces = "text/html;charset=utf-8")
    public String approve(String[] spcid,String statu){
        HttpSession httpSession = request.getSession();
        if (httpSession.getAttribute("logname").equals("flybear") ){
            return changeMSG.Change(spcid, statu);
        }else {
            return "权限不足！";
        }

    }
}
