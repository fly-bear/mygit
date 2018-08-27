package com.wind.Dao;


import com.wind.beans.User;
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
public class LoginCheck {
    public User check(User user){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        try {
            jdbc.query("select identity from user where name=? and password=?",
//        jdbc.query("select identity from user where name='bbbb'",
                    new Object[]{user.getLogname(), user.getLogpwd().hashCode()},
                    new RowCallbackHandler() {
                        @Override
                        public void processRow(ResultSet resultSet) throws SQLException, DataAccessException {
                            resultSet.last();
                            int count = resultSet.getRow();
                            resultSet.first();
                            if (count > 0) {
                                user.setIdentity(resultSet.getString("identity"));
                            } else {
                                user.setIdentity("illegal");
                            }
                        }
                    });
        }catch (DataAccessException e){
            System.out.println(e);
        }
        return user;
    }
}
