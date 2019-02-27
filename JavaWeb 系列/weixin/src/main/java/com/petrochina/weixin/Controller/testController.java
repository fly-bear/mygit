package com.petrochina.weixin.Controller;

import com.petrochina.weixin.Dao.testDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Map;

@RestController
public class testController {
    @Resource
    private testDao testDao;

    @RequestMapping("/getdata")
    public Map test(){
        Map temp = testDao.getdata();
        return temp;
    }
}
