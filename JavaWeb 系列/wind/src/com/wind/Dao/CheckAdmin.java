package com.wind.Dao;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class CheckAdmin {

    public String check(String logname,String logpwd){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        String result="";int count=0;
        count=jdbc.query("select name from user where name=? and password=? and IDENTITY='admin'", new Object[]{logname, logpwd.hashCode()}, new ResultSetExtractor<Integer>() {
            @Override
            public Integer extractData(ResultSet resultSet) throws SQLException, DataAccessException {
                resultSet.last();
                return resultSet.getRow();
            }
        });
        result=(count>0)?"yes":"no";
        return result;
    }
}
