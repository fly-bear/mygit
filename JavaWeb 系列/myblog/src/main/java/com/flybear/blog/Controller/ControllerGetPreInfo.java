package com.flybear.blog.Controller;

import com.flybear.blog.Service.ServiceGetArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ControllerGetPreInfo {

    private ServiceGetArticle serviceGetArticle;
    @Autowired
    public ControllerGetPreInfo(ServiceGetArticle serviceGetArticle){
        this.serviceGetArticle = serviceGetArticle;
    }
    @RequestMapping("/preinfo")
    public Map preinfo(@RequestParam("articleid") int id){
        return serviceGetArticle.getdetail(id);
    }
}
