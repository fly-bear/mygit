package com.flybear.tb.Controller;

import com.flybear.tb.Dao.DaoCheckAdmin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CheckAdmin {

    @Autowired
    DaoCheckAdmin daoCheckAdmin;
    @RequestMapping(value = "checkadmin")
    public @ResponseBody String check(@RequestParam("openid") String openid){
        return daoCheckAdmin.check(openid);
    }
}
