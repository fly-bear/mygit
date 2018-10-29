package com.flybear.blog.Controller;

import com.flybear.blog.Bean.BeanArticle;
import com.flybear.blog.Service.ServiceCheckSession;
import com.flybear.blog.Service.ServiceNewArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class ControllerNewArticle {

    private final ServiceNewArticle serviceNewArticle;

    @Autowired
    public ControllerNewArticle(ServiceNewArticle serviceNewArticle){
        this.serviceNewArticle = serviceNewArticle;
    }

    @RequestMapping(value = "/newarticle",method = RequestMethod.POST)
    public String save(BeanArticle beanArticle, HttpServletRequest request){
        if(!ServiceCheckSession.IsLogged(request))
            return "redirect:tologin";
        serviceNewArticle.save(beanArticle);
        return "redirect:/mainpage";
    }
}
