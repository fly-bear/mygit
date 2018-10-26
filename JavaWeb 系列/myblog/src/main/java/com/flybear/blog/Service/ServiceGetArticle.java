package com.flybear.blog.Service;

import com.flybear.blog.Bean.BeanArticle;
import com.flybear.blog.Dao.ArticleMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class ServiceGetArticle {

    @Resource
    private ArticleMapper articleMapper;

    public List<Map> getall(){
        return  articleMapper.getall();
    }

    public Map getdetail(int id){
        return articleMapper.getdetail(id);
    }

}
