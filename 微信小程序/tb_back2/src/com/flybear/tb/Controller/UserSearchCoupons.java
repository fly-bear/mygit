package com.flybear.tb.Controller;

import com.flybear.tb.Dao.DaoSearchCoupons;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

//---------------------------------用户查询所有优惠券--------------------------------------------//
@Controller
public class UserSearchCoupons {

    @Autowired
    DaoSearchCoupons searchCoupons;
    @RequestMapping("/searchcoupons")
    public @ResponseBody List getcoupon(@RequestParam("openid") String openid){
        List<Map> result = searchCoupons.get(openid);
        return  result;
    }
}
