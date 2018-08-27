package com.wind.Dao;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
//删除，新增和修改操作
@Repository
public class DoMsg {

    public String Change(LinkedList data){
        data.addLast(data.getFirst());
        data.removeFirst();
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        Object[] args=data.toArray();
        int result=jdbc.update("UPDATE data SET 日期=?,瞬时功率=?,当天发电量=?,风机转速=?,发电小时数=?,发电机数量=?,功率=?,电网三相电压=?,电网频率=?," +
                "电网传输=?,三相电流=? WHERE id=?",args);
        return (result>0)?"修改成功！":"修改失败！";
    }

    public String del(String id){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        int result=jdbc.update("DELETE FROM data WHERE id=?",id);
        return (result>0)?"删除成功！":"删除失败！";
    }

    public String tempsign(String date){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        int result=jdbc.update("insert into data(日期,瞬时功率,当天发电量,风机转速,发电小时数,发电机数量,功率,电网三相电压,电网频率,电网传输,三相电流)VALUES(?,?,?,?,?,?,?,?,?,?,?)",new Object[]{date,"1","1","1","1","1","1","1","1","1","1"});
        if(result>0){
            String myresult=jdbc.query("select id from data where 日期=?", new Object[]{date}, new ResultSetExtractor<String>() {
                @Override
                public String extractData(ResultSet resultSet) throws SQLException, DataAccessException {
                    resultSet.last();
                    return resultSet.getString("id");
                }
            });
            return myresult;
        }else {
            return "failed";
        }
    }
}
