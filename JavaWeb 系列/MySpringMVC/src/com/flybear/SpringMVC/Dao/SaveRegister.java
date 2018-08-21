package com.flybear.SpringMVC.Dao;

//这是注册
import com.flybear.SpringMVC.beans.registor;
import org.springframework.stereotype.Repository;

import java.sql.*;

@Repository
public class SaveRegister {
    private Connection con; //声明Connection对象
    private String driver = "com.mysql.jdbc.Driver";//驱动程序名
    private String url = "jdbc:mysql://localhost:3306/lxdjb?useUnicode=true&characterEncoding=utf8";//URL指向要访问的数据库名mydata
    private String user = "root";
    private String password = "hyggbgb";//MySQL配置时的密码

    public String save(registor registor){
        String id=registor.getId();
        String pwd=registor.getPwd();
        String sql="select id,pwd from user where id="+id;
        String result="";
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
            if (rowCount!=0){
                result="此账号已被注册！";
            }else{
                PreparedStatement psql;
                psql=con.prepareStatement("insert into user(id,pwd)value(?,?)");
                psql.setString(1,id);
                psql.setString(2,pwd);
                int temp=psql.executeUpdate();
                result=(temp==1)?"注册成功！\n":"注册失败！\n";

            }
            result=result+"是否跳转到登录页面？";
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
