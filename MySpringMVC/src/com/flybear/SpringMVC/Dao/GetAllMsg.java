package com.flybear.SpringMVC.Dao;

import com.flybear.SpringMVC.beans.MyRequest;
import org.omg.PortableServer.LIFESPAN_POLICY_ID;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Repository
public class GetAllMsg {
    private Connection con; //声明Connection对象
    private String driver = "com.mysql.jdbc.Driver";//驱动程序名
    private String url = "jdbc:mysql://localhost:3306/lxdjb?useUnicode=true&characterEncoding=utf8";//URL指向要访问的数据库名mydata
    private String user = "root";
    private String password = "hyggbgb";//MySQL配置时的密码
    public List Getmsg(MyRequest p){

        String spcid=p.getSpcid();
        String week = p.getWeek();
        String major = p.getMajor();
        String classes = p.getClasses();
        String condition1;
        String condition2;
        String condition3;
        String condition="where ";

        if(week.equals("全部")){
            condition1="";
        }
        else {
            condition1=" and week="+week;
        }
        if(major.equals("全部")){
            condition2="";
        }
        else{
            condition2=" and major=\""+major+"\"";
        }
        if(classes.equals("全部")){
            condition3="";
        }
        else{
            condition3=" and classes=\""+major+classes+"\"";
        }

        if(!condition1.equals("")){
                condition=condition+condition1.substring(5)+condition2+condition3;
        } else if(!condition2.equals("")){
                condition=condition+condition2.substring(5)+condition3;
        } else if(!condition3.equals("")) {
            condition = condition + condition3.substring(5);
        }else{
            condition="";
        }

        String sql = "select * from mytable where spcid=" + spcid;
        if (spcid.equals("ALL")){
            sql="SELECT * FROM mytable "+condition;
        }
        ArrayList<Map> result = new ArrayList<>();

        try {
            //加载驱动程序
            Class.forName(driver);
            //1.getConnection()方法，连接MySQL数据库！！
            con = DriverManager.getConnection(url, user, password);
            if (!con.isClosed())
                System.out.println("Succeeded connecting to the Database!");
            //2.创建statement类对象，用来执行SQL语句！！

            Statement statement = con.createStatement();

            ResultSet rs = statement.executeQuery(sql);

            rs.last(); //移到最后一行
            int rowCount = rs.getRow(); //得到当前行号，也就是记录数
            rs.beforeFirst(); //如果还要用结果集，就把指针再移到初始化的位置


            while (rs.next()) {
                Map<String, String> tempmap = new LinkedHashMap<>();
                tempmap.put("周数",rs.getString("week"));
                tempmap.put("年级", rs.getString("grade"));
                tempmap.put("专业",rs.getString("major"));
                tempmap.put("班级", rs.getString("classes"));
                tempmap.put("学号", rs.getString("id"));
                tempmap.put("姓名", rs.getString("name"));
                tempmap.put("园区",rs.getString("area"));
                tempmap.put("宿舍", rs.getString("dormitory"));
                tempmap.put("目的地", rs.getString("aim"));
                tempmap.put("请假原因", rs.getString("reason"));
                tempmap.put("离校时间", rs.getString("leavetime"));
                tempmap.put("返校时间", rs.getString("returntime"));
                tempmap.put("是否离汉", rs.getString("isleft"));
                tempmap.put("是否武汉库", rs.getString("isinlib"));
                tempmap.put("本人电话", rs.getString("phonenumber"));
                tempmap.put("紧急联系人", rs.getString("emergencycontact"));
                tempmap.put("紧急联系人电话", rs.getString("emergencynumber"));
                tempmap.put("家庭联系人", rs.getString("homecontact"));
                tempmap.put("家庭联系人电话", rs.getString("homenumber"));

                result.add(tempmap);
            }

            rs.close();
            statement.close();
            con.close();

        } catch (ClassNotFoundException e) {
            System.out.println("Sorry,can`t find the Driver!");
            e.printStackTrace();
        } catch (SQLException e) {
            //数据库连接失败异常处理
            e.printStackTrace();
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }

        return result;
    }

}

