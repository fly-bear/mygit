package com.flybear.blog.Controller;

import com.flybear.blog.Service.ServiceGetArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ControllerGetArticle {

    private ServiceGetArticle serviceGetArticle;
    @Autowired
    public ControllerGetArticle(ServiceGetArticle serviceGetArticle){
        this.serviceGetArticle = serviceGetArticle;
    }

    @RequestMapping("/getallarticles")
    List<Map> getall(){
        return serviceGetArticle.getall();
    }
}
