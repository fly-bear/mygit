package com.flybear.tb.Controller;

import com.flybear.tb.Dao.DaoCheckAdmin;
import com.flybear.tb.Dao.DaoNewCoupons;
import com.flybear.tb.Service.RandomString;
import com.flybear.tb.beans.ProduceMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
//-----------------------------管理员设置新优惠券----------------------------------------//
@Controller
public class NewCoupons {

    @Autowired
    DaoNewCoupons daoNewCoupons;
    @Autowired
    RandomString randomString;
    @Autowired
    DaoCheckAdmin daoCheckAdmin;
    @RequestMapping(value = "/newcoupons",method = RequestMethod.POST)
    public @ResponseBody String newcoupons(@RequestParam("number")  int number,@RequestParam("money") float money,@RequestParam("openid") String openid) {

        if(daoCheckAdmin.check(openid).equals("ok")) {
            String newcoupon = daoNewCoupons.produce(number, money);
            return newcoupon;
        }else{
            return "faild";
        }
    }
}
