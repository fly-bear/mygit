package com.flybear.SpringMVC.Dao;

import org.springframework.stereotype.Repository;

import java.sql.*;

@Repository
public class ChangeMSG {
    private Connection con; //声明Connection对象
    private String driver = "com.mysql.jdbc.Driver";//驱动程序名
    private String url = "jdbc:mysql://localhost:3306/lxdjb?useUnicode=true&characterEncoding=utf8";//URL指向要访问的数据库名mydata
    private String user1 = "root";
    private String password = "hyggbgb";//MySQL配置时的密码

    public String Change(String[] spcid,String statu){
        String sql="UPDATE mytable SET status = \""+statu+"\" WHERE spcid=";
        for (int i=0;i<spcid.length;i++){
            if(i==0){
                sql=sql+spcid[i];
            }
            else{
                sql=sql+" or spcid="+spcid[i] ;
            }
        }
        String result="";

        try {
            //加载驱动程序
            Class.forName(driver);
            //1.getConnection()方法，连接MySQL数据库！！
            con = DriverManager.getConnection(url, user1, password);
            if (!con.isClosed())
                System.out.println("Succeeded connecting to the Database!");
            //2.创建statement类对象，用来执行SQL语句！！

            Statement statement = con.createStatement();


            int a =statement.executeUpdate(sql);
            result=(a>0)?"审批成功！":"审批失败！";

            statement.close();
            con.close();
        }catch (ClassNotFoundException e) {
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
