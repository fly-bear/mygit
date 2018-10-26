package com.flybear.blog.Controller;

import com.flybear.blog.Bean.BeanComment;
import com.flybear.blog.Service.ServiceAddComment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerAddComment {

    private ServiceAddComment serviceAddComment;

    public ControllerAddComment(ServiceAddComment serviceAddComment){
        this.serviceAddComment = serviceAddComment;
    }

    @RequestMapping("/addcomment")
    public String add(BeanComment beanComment){
        serviceAddComment.add(beanComment);
        return "redirect:/detail?articleid="+beanComment.getArticleid();
    }
}
