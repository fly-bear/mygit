package com.wind.Dao;


import com.sun.javafx.collections.MappingChange;
import com.wind.beans.AllMsg;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

@Repository
public class GetMsg{

    public AllMsg GetOneDayMsg(AllMsg allMsg){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        jdbc.query("SELECT * from data WHERE id>0 order by id desc LIMIT 1;", new RowCallbackHandler() {
            @Override
            public void processRow(ResultSet resultSet) throws SQLException {
                allMsg.setInstantaneousPower(resultSet.getString("瞬时功率"));
                allMsg.setGenerationCapacity(resultSet.getString("当天发电量"));
                allMsg.setFanSpeed(resultSet.getString("风机转速"));
                allMsg.setHours(resultSet.getString("发电小时数"));
                allMsg.setGeneratorsNum(resultSet.getString("发电机数量"));
                allMsg.setPower(resultSet.getString("功率"));
                allMsg.setThreePhaseVoltage(resultSet.getString("电网三相电压"));
                allMsg.setPowerGridFrequency(resultSet.getString("电网频率"));
                allMsg.setPowerGridTransmission(resultSet.getString("电网传输"));
                allMsg.setThreePhaseCurrent(resultSet.getString("三相电流"));
                allMsg.setDate(resultSet.getString("日期"));
            }
        });
        return allMsg;
    }

    public Map<Integer,String[]> GetSevenDayMsg(){
        Map result = new TreeMap();
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        jdbc.query("SELECT * from data WHERE id>0 order by id desc LIMIT 7;", new RowCallbackHandler() {
            @Override
            public void processRow(ResultSet resultSet) throws SQLException {
                do{
                    String[] value={resultSet.getString("日期"),resultSet.getString("当天发电量")};
                    result.put(resultSet.getInt("id"),value);
                }while (resultSet.next());
            }
        });
        return result;
    }

    public List<Map> GetAllMsg(){
        List<Map> result = new ArrayList<Map>();
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        result=jdbc.query("SELECT * FROM data WHERE id>0;", new ResultSetExtractor<List<Map>>() {
            @Override
            public List<Map> extractData(ResultSet resultSet) throws SQLException, DataAccessException {
                List<Map> tempresult = new ArrayList<Map>();
                while (resultSet.next())
                {
                    Map<String,Object> temp = new LinkedHashMap<>();
                    temp.put("序号",resultSet.getInt("id"));
                    temp.put("日期",resultSet.getString("日期"));
                    temp.put("瞬时功率",resultSet.getString("瞬时功率"));
                    temp.put("当天发电量",resultSet.getString("当天发电量"));
                    temp.put("风机转速",resultSet.getString("风机转速"));
                    temp.put("发电小时数",resultSet.getString("发电小时数"));
                    temp.put("发电机数量",resultSet.getString("发电机数量"));
                    temp.put("功率",resultSet.getString("功率"));
                    temp.put("电网三相电压",resultSet.getString("电网三相电压"));
                    temp.put("电网频率",resultSet.getString("电网频率"));
                    temp.put("电网传输",resultSet.getString("电网传输"));
                    temp.put("三相电流",resultSet.getString("三相电流"));
                    tempresult.add(temp);
                }
                return tempresult;
            }
        });

        return result;
    }

    public List<Map> GetSpcMsg(String date){
        List<Map> result = new ArrayList<Map>();
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:beans.xml");
        JdbcTemplate jdbc = (JdbcTemplate)ctx.getBean("jdbcTemp");
        result=jdbc.query("select * from data where 日期=?", new Object[]{date}, new ResultSetExtractor<List<Map>>() {
            @Override
            public List<Map> extractData(ResultSet resultSet) throws SQLException, DataAccessException {
                List<Map> tempresult = new ArrayList<Map>();
                while (resultSet.next()) {
                    Map<String,Object> temp = new LinkedHashMap<>();
                    temp.put("序号", resultSet.getInt("id"));
                    temp.put("日期", resultSet.getString("日期"));
                    temp.put("瞬时功率", resultSet.getString("瞬时功率"));
                    temp.put("当天发电量", resultSet.getString("当天发电量"));
                    temp.put("风机转速", resultSet.getString("风机转速"));
                    temp.put("发电小时数", resultSet.getString("发电小时数"));
                    temp.put("发电机数量", resultSet.getString("发电机数量"));
                    temp.put("功率", resultSet.getString("功率"));
                    temp.put("电网三相电压", resultSet.getString("电网三相电压"));
                    temp.put("电网频率", resultSet.getString("电网频率"));
                    temp.put("电网传输", resultSet.getString("电网传输"));
                    temp.put("三相电流", resultSet.getString("三相电流"));
                    tempresult.add(temp);
                }
                return tempresult;
            }
        });
        return result;
    }


}
