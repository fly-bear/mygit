package com.wind.Controller;


import com.wind.Dao.CheckAdmin;
import com.wind.Dao.DoMsg;
import com.wind.Dao.GetMsg;
import com.wind.Dao.SetLog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpServletRequest;

import java.text.SimpleDateFormat;
import java.util.*;


@Controller
public class Admin {

    @Autowired
    HttpServletRequest request;
    @Autowired
    GetMsg getMsg;
    @RequestMapping("/getall")
    public @ResponseBody List requestjson(@RequestBody String p){
        HttpSession httpSession= request.getSession();
        List<Map> result = new ArrayList<Map>();
        if(httpSession.getAttribute("identity").equals("admin")){
            result=getMsg.GetAllMsg();
        }
//        result=getMsg.GetAllMsg();
        return result;
    }


    @RequestMapping("/search")
    public @ResponseBody List search(@RequestBody String date){
        HttpSession httpSession= request.getSession();
        List<Map> result = new ArrayList<Map>();
        if(httpSession.getAttribute("identity").equals("admin")){
            if(date.length()>5)
                result=getMsg.GetSpcMsg(date.substring(5));
            else
                result=getMsg.GetAllMsg();
        }
        return result;
    }

    @RequestMapping("/manege")
    public ModelAndView visit(){
        HttpSession httpSession= request.getSession();
        if(httpSession.getAttribute("identity").equals("admin")){
            ModelAndView md = new ModelAndView("table");
            md.addObject("name",httpSession.getAttribute("logname"));
            return md;
        }
        else{
            ModelAndView md = new ModelAndView("forward:visit");
            return md;
        }

    }

    @Autowired
    DoMsg doMsg;
    @RequestMapping(value = "/changemsg",produces="text/html;charset=UTF-8;")
    public @ResponseBody String change(@RequestParam("data[]")LinkedList test){
        HttpSession httpSession= request.getSession();
        if(httpSession.getAttribute("identity").equals("admin")) {
            System.out.println(test);
            String result = doMsg.Change(test);
            if (result.equals("修改成功！")) {
                //写日志
                SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
                String date = df.format(new Date());// new Date()为获取当前系统时间
                String log = "管理员 " + httpSession.getAttribute("logname") + " 修改了id为 "+String.valueOf(test.get(11))+" 的数据";
                    setLog.WriteLog(date, log);
            }
            return result;
        }else {
            return "权限不足！";
        }
    }

    @Autowired
    SetLog setLog;
    @RequestMapping(value = "/deletemsg",produces="text/html;charset=UTF-8;")
    public @ResponseBody String delete(@RequestParam("id")String id){
        HttpSession httpSession= request.getSession();
        if(httpSession.getAttribute("identity").equals("admin")) {
            String result = doMsg.del(id);
            if (result.equals("删除成功！")) {
                //写日志
                SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
                String date = df.format(new Date());// new Date()为获取当前系统时间
                String log = "管理员 " + httpSession.getAttribute("logname") + " 删除id为 "+String.valueOf(id)+" 的数据";
                setLog.WriteLog(date, log);
            }
            return result;
        }else {
            return "权限不足！";
        }
    }


    @RequestMapping(value = "/tempsign",produces="text/html;charset=UTF-8;")
    public @ResponseBody String tempsign(@RequestParam("data")String date){
        HttpSession httpSession= request.getSession();
        if(httpSession.getAttribute("identity").equals("admin")) {
            String result=doMsg.tempsign(date);
            if (!result.equals("failed")) {
                //写日志
                SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
                String mydate = df.format(new Date());// new Date()为获取当前系统时间
                String log = "管理员 " + httpSession.getAttribute("logname") + " 新增id为 "+String.valueOf(result)+" 的数据";
                setLog.WriteLog(mydate, log);
            }
            return result;
        }else {
            return "failed";
        }
    }


}
