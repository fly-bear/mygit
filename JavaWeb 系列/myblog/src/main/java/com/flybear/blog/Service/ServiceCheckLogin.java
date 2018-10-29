package com.flybear.blog.Service;

import com.flybear.blog.Bean.BeanUser;
import com.flybear.blog.Dao.UserMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;
import java.util.List;
import java.util.Map;

@Service
public class ServiceCheckLogin {
    @Resource
    private UserMapper userMapper;

    public Boolean check(HttpServletRequest request, BeanUser beanUser){
        List<Map> result = userMapper.getuser(beanUser);
        HttpSession session = request.getSession();
        if (result.size()>0){
            if(session.getAttribute("username")==null){
                session.setAttribute("username",beanUser.getUsername());
                session.setAttribute("password",beanUser.getPassword());
            }
            return true;
        }else {
            session.removeAttribute("username");
            session.removeAttribute("password");
            return false;
        }
    }
}
