package com.flybear.tb.Dao;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.jdbc.core.JdbcTemplate;

@Repository
public class DaoSearchCoupons {
    public List<Map> get(String openid){
        List<Map> result = new ArrayList<Map>();
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        result=jdbc.query("SELECT coupon,money from gotcoupons where openid=?", new Object[]{openid}, new ResultSetExtractor<List<Map>>() {
            @Override
            public List<Map> extractData(ResultSet resultSet) throws SQLException, DataAccessException {
                List<Map> tempresult = new ArrayList<Map>();
                while (resultSet.next()){
                    Map<String,Object> temp = new LinkedHashMap<>();
                    temp.put("coupon",resultSet.getString("coupon"));
                    temp.put("money",resultSet.getString("money"));
                    tempresult.add(temp);
                }
                return tempresult;
            }
        });
        return result;
    }
}
