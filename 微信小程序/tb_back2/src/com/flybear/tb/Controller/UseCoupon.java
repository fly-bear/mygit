package com.flybear.tb.Controller;

import com.flybear.tb.Dao.DaoUseCoupon;
import com.flybear.tb.beans.Use;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.LinkedHashMap;
import java.util.Map;

@Controller
public class UseCoupon {

    @Autowired
    Use use;
    @Autowired
    DaoUseCoupon daoUseCoupon;
    @RequestMapping(value = "/usecoupon")
    public @ResponseBody Map use(@RequestParam("coupon") String coupon){
        use=daoUseCoupon.use(coupon,use);
        Map result=new LinkedHashMap();
        result.put("money",use.getMoney());
        result.put("name",use.getName());
        result.put("result",use.getResult());
        return result;
    }
}
