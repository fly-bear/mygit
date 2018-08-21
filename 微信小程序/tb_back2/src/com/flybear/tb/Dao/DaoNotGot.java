package com.flybear.tb.Dao;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Repository
public class DaoNotGot {
    public List<Map> get(){
        List<Map> result = new ArrayList<Map>();
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        result=jdbc.query("select batch,max(money),count(1) from coupons where got=0 group by batch", new Object[]{}, new ResultSetExtractor<List<Map>>() {
            @Override
            public List<Map> extractData(ResultSet resultSet) throws SQLException, DataAccessException {
                List<Map> tempresult = new ArrayList<Map>();
                while (resultSet.next()){
                    Map<String,Object> temp = new LinkedHashMap<>();
                    temp.put("batch",resultSet.getString("batch"));
                    temp.put("money",resultSet.getString("max(money)"));
                    temp.put("number",resultSet.getString("count(1)"));
                    tempresult.add(temp);
                }
                return tempresult;
            }
        });
        return result;
    }
}
