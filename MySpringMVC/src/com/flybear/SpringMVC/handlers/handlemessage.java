package com.flybear.SpringMVC.handlers;

import com.flybear.SpringMVC.beans.message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.xml.crypto.Data;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


@Controller
public class handlemessage {

    public int differentDaysByMillisecond(Date date1,Date date2)
    {
        int weeks = (int) ((date2.getTime() - date1.getTime()) / (1000*3600*24*7))+1;
        return weeks;
    }

    @Autowired
    private com.flybear.SpringMVC.Dao.SaveMsg SaveMsg;

    @RequestMapping("/handlemessage")
    public ModelAndView handle(message msg, @RequestHeader("Referer") String referer){
//        if(referer.equals("http://bear.flybear.wang:8080/form")) {
        if(referer.equals("http://localhost:8080/form")) {
            String dateStr = "2018-2-26 00:00:00";
            Date now=new Date();
            String dateStr2 = now.toString();
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            try
            {
//                Date date2 = format.parse(dateStr2);
                Date date = format.parse(dateStr);
                msg.setWeek(String.valueOf(differentDaysByMillisecond(date,now)));
//                System.out.println("两个日期的差距：" + differentDaysByMillisecond(date,now));
            } catch (ParseException e) {
                e.printStackTrace();
            }
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
