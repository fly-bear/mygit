package com.wind.Dao;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class SetRegister {

    public String regist(String logname,String logpwd){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        String result="";int count=0;
        count=jdbc.query("select name from user where name=?", new Object[]{logname}, new ResultSetExtractor<Integer>() {
            @Override
            public Integer extractData(ResultSet resultSet) throws SQLException, DataAccessException {
                resultSet.last();
                return resultSet.getRow();
            }
        });
        result=(count>0)?"yes":"no";
        if(result.equals("no")){
            int temp=jdbc.update("INSERT INTO user(name,password)VALUES(?,?)",new Object[]{logname,logpwd.hashCode()});
            return (temp>0)?"注册成功！":"注册失败！";
        }else {
            return "用户名已存在！";
        }
    }
}
