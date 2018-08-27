package com.wind.Dao;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class SetLog {
    public String WriteLog(String date,String log){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        String result=(jdbc.update("INSERT INTO log(datetime,log)VALUES (?,?)",new Object[]{date,log})>0)?"success":"failed";
        return result;
    }
}
