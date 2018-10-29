package com.flybear.blog.Service;

import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Service
public class ServiceCheckSession {
    public static boolean IsLogged(HttpServletRequest request){
        HttpSession session = request.getSession();
        return session.getAttribute("username")!=null;
    }
}
