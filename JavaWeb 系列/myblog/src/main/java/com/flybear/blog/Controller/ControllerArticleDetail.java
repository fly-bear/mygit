package com.flybear.blog.Controller;

import com.flybear.blog.Bean.BeanArticle;
import com.flybear.blog.Service.ServiceGetArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
public class ControllerArticleDetail {
    private ServiceGetArticle serviceGetArticle;

    @Autowired
    public ControllerArticleDetail(ServiceGetArticle serviceGetArticle){
        this.serviceGetArticle = serviceGetArticle;
    }

    @RequestMapping("/detail")
    public String articledetail(@RequestParam("articleid")int id, Model model){
        Map result = serviceGetArticle.getdetail(id);
        model.addAttribute("article",result);
        return "detail";
    }
}
