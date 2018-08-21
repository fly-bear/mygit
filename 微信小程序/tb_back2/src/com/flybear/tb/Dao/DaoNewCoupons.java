package com.flybear.tb.Dao;

import com.flybear.tb.Service.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class DaoNewCoupons {
    @Autowired
    RandomString randomString;
    public String produce(int number,float money){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        String batch=randomString.go(12);//本批次
        int i;
        int count=1;
        for(i=0;i<number;i++) {
            count=count*jdbc.update("insert into coupons(batch,name,money)values(?,?,?)", new Object[]{batch, randomString.go(15), money});
        }
        if(count!=0)
            return batch;
        else
            return "insert error";
    }
}
