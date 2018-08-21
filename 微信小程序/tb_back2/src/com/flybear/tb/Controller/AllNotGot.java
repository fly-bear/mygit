package com.flybear.tb.Controller;


import com.flybear.tb.Dao.DaoNotGot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
public class AllNotGot {

    @Autowired
    DaoNotGot daoNotGot;
    @RequestMapping(value = "/allnotgot")
    public @ResponseBody List notgot(@RequestParam("openid") String openid){//留着以后做身份验证
        return daoNotGot.get();
    }
}
