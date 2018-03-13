package com.flybear.SpringMVC.Dao;

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
    public List Getmsg(String spcid){

        String sql = "select * from mytable where spcid=" + spcid;
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
                tempmap.put("年级", rs.getString("grade"));
                tempmap.put("班级", rs.getString("classes"));
                tempmap.put("学号", rs.getString("id"));
                tempmap.put("姓名", rs.getString("name"));
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

