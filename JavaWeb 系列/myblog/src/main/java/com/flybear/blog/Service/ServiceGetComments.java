package com.flybear.blog.Service;

import com.flybear.blog.Dao.CommentsMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class ServiceGetComments {
    @Resource
    CommentsMapper commentsMapper;

    public List<Map> getall(int id){
        return commentsMapper.getcomments(id);
    }
}
