package com.flybear.blog.Controller;

import com.flybear.blog.Service.ServiceUploadImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ControllerUploadImage {

    private final ServiceUploadImage serviceUploadImage;
    @Autowired
    public ControllerUploadImage(ServiceUploadImage serviceUploadImage){
        this.serviceUploadImage = serviceUploadImage;
    }

    @RequestMapping(value = "/uploadimage",method = RequestMethod.POST)
    public String upload(@RequestParam("pic") MultipartFile file){
        return this.serviceUploadImage.save(file);
    }

    @RequestMapping(value = "insertimage")
    public Map save(@RequestParam("insertimg") MultipartFile file){
        Map<String,Object> result = new HashMap<>();
        String name = this.serviceUploadImage.save(file);
        if(name.equals("failed")){
            result.put("errno",1);
        }else {
            result.put("errno",0);
            String temp[] = {"getinsertimage/"+name};
            result.put("data",temp);
        }
        return result;
    }
}
