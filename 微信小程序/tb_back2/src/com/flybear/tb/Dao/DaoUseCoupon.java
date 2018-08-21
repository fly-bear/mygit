package com.flybear.tb.Dao;

import com.flybear.tb.beans.Use;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

@Repository
public class DaoUseCoupon {
    public Use use(String coupon, Use use) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate) ctx.getBean("jdbcTemp");
        jdbc.query("select money,name from gotcoupons where coupon=?", new Object[]{coupon}, new RowCallbackHandler() {
            @Override
            public void processRow(ResultSet resultSet) throws SQLException {
                use.setMoney(resultSet.getString("money"));
                use.setName(resultSet.getString("name"));
            }
        });
        int temp=1;
        temp=temp*jdbc.update("update coupons set used=1 where name=?",new Object[]{coupon});
        temp=temp*jdbc.update("delete from gotcoupons where coupon=?",new Object[]{coupon});
        use.setResult(temp);
        return use;
    }

}
