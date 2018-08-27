package com.wind.Controller;

import com.wind.Dao.SetLog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.wind.beans.User;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class Register {


    @RequestMapping("/register")
    public ModelAndView regist(){
        ModelAndView md=new ModelAndView("register");
        md.addObject("response","new");
        return md;
    }


    @Autowired
    SetLog setLog;
    @Autowired
    com.wind.Dao.SetRegister register;
    @RequestMapping(value="/checkreg",produces="text/html;charset=UTF-8;")
    public @ResponseBody String toregist(String logname,String logpwd,String confirm_password){
//    public String toregist(@RequestParam(value = "logname",required = false)String logname){
        String result=register.regist(logname,logpwd);
        if (result.equals("注册成功！")) {
            //写日志
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            String date = df.format(new Date());// new Date()为获取当前系统时间
            String log = "用户 " + logname + " 注册";
            setLog.WriteLog(date, log);
        }
        return result;
    }
}
