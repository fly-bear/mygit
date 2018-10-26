package com.flybear.blog.Controller;

import com.flybear.blog.Service.ServiceGetComments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ControllerGetComments {
    private ServiceGetComments serviceGetComments;
    @Autowired
    public ControllerGetComments(ServiceGetComments serviceGetComments){
        this.serviceGetComments = serviceGetComments;
    }

    @RequestMapping("/getcomments")
    public List<Map> getall(@RequestParam("articleid") int id){
        return serviceGetComments.getall(id);
    }
}
