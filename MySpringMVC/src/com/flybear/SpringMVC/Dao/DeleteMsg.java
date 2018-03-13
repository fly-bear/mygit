package com.flybear.SpringMVC.Dao;


import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;


@Repository
public class DeleteMsg {



    private Connection con; //声明Connection对象
    private String driver = "com.mysql.jdbc.Driver";//驱动程序名
    private String url = "jdbc:mysql://localhost:3306/lxdjb?useUnicode=true&characterEncoding=utf8";//URL指向要访问的数据库名mydata
    private String user = "root";
    private String password = "hyggbgb";//MySQL配置时的密码


    public String delete(String spcid){

        String sql="delete from mytable where spcid="+spcid;
        String result="";
        try {
            //加载驱动程序
            Class.forName(driver);
            //1.getConnection()方法，连接MySQL数据库！！
            con = DriverManager.getConnection(url, user, password);
            if (!con.isClosed())
                System.out.println("Succeeded connecting to the Database!");
            Statement statement = con.createStatement();
            int rs = statement.executeUpdate(sql);
            result=(rs==1)?"ojbk":"删除失败!";
            con.close();
            statement.close();

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
