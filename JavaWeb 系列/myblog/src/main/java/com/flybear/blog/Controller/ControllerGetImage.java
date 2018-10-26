package com.flybear.blog.Controller;


import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;


@RestController
public class ControllerGetImage {
    @RequestMapping(value = "getinsertimage/{imagename}",produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getimage(@PathVariable String imagename) throws IOException{
        String path = "src/main/resources/statics/images/upload/"+imagename;
        FileInputStream stream = new FileInputStream(new File(path));
        byte[] result = new byte[stream.available()];
        stream.read(result,0,stream.available());
        return result;
    }
}
