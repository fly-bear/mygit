package com.wind.Controller;


import com.wind.Dao.LoginCheck;
import com.wind.Dao.SetLog;
import com.wind.beans.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

import java.util.Date;
import java.text.SimpleDateFormat;



@Controller
@SessionAttributes(value = {"identity","logname","logpass"})
public class Login {

    @RequestMapping("/login")
    public ModelAndView loginpage(ModelMap modelMap, HttpServletRequest httpServletRequest){
        modelMap.addAttribute("identity","illegal");
        ModelAndView md = new ModelAndView("login");
        String msg = httpServletRequest.getParameter("message");
        if (msg==null){
            msg="new";
        }
        md.addObject("message",msg);
        return md;
    }

    @Autowired
    SetLog setLog;
    @Autowired
    LoginCheck loginCheck;
    @RequestMapping("/tologin")
    public ModelAndView login(User user, ModelMap modelMap){
        user.setIdentity("illegal");
        user = loginCheck.check(user);
        if(user.getIdentity().equals("illegal")){
            ModelAndView md = new ModelAndView("redirect:login");
            md.addObject("message","用户名或密码错误！");
            return md;

        }else {

            //写日志
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
            String date=df.format(new Date());// new Date()为获取当前系统时间
            String log="用户 "+user.getLogname()+" 登录系统";
            setLog.WriteLog(date,log);

            //返回页面
            modelMap.addAttribute("logname",user.getLogname());
            modelMap.addAttribute("identity",user.getIdentity());
            ModelAndView md = new ModelAndView("redirect:visit");
            return md;
        }
    }

    @RequestMapping(value = "/logout",produces="text/html;charset=UTF-8;")
    public ModelAndView logout(SessionStatus sessionStatus){
        sessionStatus.setComplete();
        ModelAndView md=new ModelAndView("login");
        md.addObject("message","成功退出！");
        return md;
    }
}
