package com.flybear.blog.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Random;

@Service
public class ServiceUploadImage {
    public String save(MultipartFile file){
        String name = "failed";
        try {
            String time = String.valueOf(System.currentTimeMillis());
            String random = String.valueOf(new Random().nextInt(100));
            String temp = time+random+file.getOriginalFilename();
            if(temp.length()>20)
                temp = temp.substring(temp.length()-20,temp.length());
            BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/statics/images/upload/"+temp)));
            out.write(file.getBytes());
            out.flush();
            out.close();
            name = temp;
        }catch (Exception e){
            e.printStackTrace();
        }
        return name;
    }
}
