package com.flybear.tb.Controller;

import com.flybear.tb.Dao.DaoGetCoupon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

//-------------------------------用户领取优惠券----------------------------------------//
@Controller
public class UserGetCoupon {

    @Autowired
    DaoGetCoupon daoGetCoupon;
    @RequestMapping(value = "/getcoupon",produces = "text/html;charset=utf-8")
    public @ResponseBody String getcoupon(@RequestParam("batch") String batch,@RequestParam("openid") String openid,@RequestParam("name") String name){
        String result=daoGetCoupon.get(batch,openid,name);
        return result;
    }
}
