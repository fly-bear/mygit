package com.flybear.tb.Dao;

import org.apache.commons.collections.map.LinkedMap;
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
public class DaoGetCoupon {
    public String get(String batch,String openid,String username){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        List<Map> allname= jdbc.query("select name,money from coupons where batch=? and got=0", new Object[]{batch}, new ResultSetExtractor<List<Map>>() {
            @Override
            public List<Map> extractData(ResultSet resultSet) throws SQLException, DataAccessException {
                List<Map> temp = new ArrayList<Map>();
                while (resultSet.next()){
                    Map<String,String> tempmap = new LinkedHashMap<>();
                    tempmap.put("name",resultSet.getString("name"));
                    tempmap.put("money",resultSet.getString("money"));
                    temp.add(tempmap);
                }
                return temp;
            }
        });
        if (allname.size()==0)
            return "已被领取完！";
        jdbc.update("insert into gotcoupons(openid,coupon,money,name)values(?,?,?,?)",new Object[]{openid,allname.get(0).get("name"),allname.get(0).get("money"),username});//在已领取优惠券库中插入
        jdbc.update("update coupons set got=1 where name=?",new Object[]{allname.get(0).get("name")});//将优惠券库的领取状态设为已领取
        return "领取成功！";
    }
}
