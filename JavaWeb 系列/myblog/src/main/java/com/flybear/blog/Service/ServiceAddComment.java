package com.flybear.blog.Service;

import com.flybear.blog.Bean.BeanComment;
import com.flybear.blog.Dao.CommentsMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class ServiceAddComment {
    @Resource
    CommentsMapper commentsMapper;

    public void add(BeanComment beanComment){
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = df.format(new Date());
        beanComment.setDate(date);
        beanComment.setReplied(-1);
        commentsMapper.addcomment(beanComment);
    }
}
