package com.flybear.tb.Dao;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class DaoCheckAdmin {
    public String check(String openid){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        int count=Integer.valueOf((String) jdbc.queryForObject("select count(1) from admin where openid=?",new Object[]{openid},java.lang.String.class));
        return (count!=0)?"ok":"failed";
    }
}
