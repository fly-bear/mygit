package com.flybear.SpringMVC.Dao;

//这是表格提交
import com.flybear.SpringMVC.beans.message;
import org.springframework.stereotype.Repository;

import java.sql.*;

@Repository
public class SaveMsg implements SaveMsgImple {
    private Connection con; //声明Connection对象
    private String driver = "com.mysql.jdbc.Driver";//驱动程序名
    private String url = "jdbc:mysql://localhost:3306/lxdjb?useUnicode=true&characterEncoding=utf8";//URL指向要访问的数据库名mydata
    private String user = "root";
    private String password = "hyggbgb";//MySQL配置时的密码
    @Override
    public String SaveMessage(message msg){
            String a="严重错误！请联系开发人员";
        try{
            Class.forName(driver);//加载驱动
            con = DriverManager.getConnection(url,user,password);//getConnection()方法，连接MySQL数据库！！
            if(!con.isClosed())
                System.out.println("Succeeded connecting to the Database!");

            String sql="select * from mytable where week="+msg.getWeek()+" and name=\""+msg.getName()+"\"";
            Statement statement = con.createStatement();
            ResultSet rs = statement.executeQuery(sql);
            rs.last(); //移到最后一行
            int rowCount = rs.getRow(); //得到当前行号，也就是记录数
            rs.beforeFirst(); //如果还要用结果集，就把指针再移到初始化的位置
            PreparedStatement psql;
            if (rowCount==0) {
                psql = con.prepareStatement("insert into mytable(grade,major,classes,week,id,name,area,dormitory,isleft,aim," +
                        "reason,leavetime,returntime,phonenumber,emergencycontact,emergencynumber,homecontact," +
                        "homenumber,isinlib)value(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");


            }else {
                psql = con.prepareStatement("update mytable set grade=?,major=?,classes=?,week=?,id=?,name=?,area=?,dormitory=?,isleft=?,aim=?," +
                        "reason=?,leavetime=?,returntime=?,phonenumber=?,emergencycontact=?,emergencynumber=?,homecontact=?," +
                        "homenumber=?,isinlib=? WHERE week=? and name=?");
                psql.setString(20,msg.getWeek());
                psql.setString(21,msg.getName());
            }
                psql.setString(1, msg.getGrade());
                psql.setString(2, msg.getMajor());
                psql.setString(3, msg.getClasses());
                psql.setString(4, msg.getWeek());
                psql.setString(5, msg.getId());
                psql.setString(6, msg.getName());
                psql.setString(7, msg.getArea());
                psql.setString(8, msg.getDormitory());
                psql.setString(9, msg.getIsleft());
                psql.setString(10, msg.getAim());
                psql.setString(11, msg.getReason());
                psql.setString(12, msg.getLeavetime());
                psql.setString(13, msg.getReturntime());
                psql.setString(14, msg.getPhonenumber());
                psql.setString(15, msg.getEmergencycontact());
                psql.setString(16, msg.getEmergencynumber());
                psql.setString(17, msg.getHomecontact());
                psql.setString(18, msg.getHomenumber());
                psql.setString(19, msg.getIsinlib());


                int result = psql.executeUpdate();
                a = (result !=0) ? "上传数据成功！" : "上传数据失败！";

            System.out.println(a);
            con.close();


        }catch (ClassNotFoundException e){
            a="上传失败，请重试！";
            System.out.println("Sorry,can`t find the Driver!");
            e.printStackTrace();
        }catch(SQLException e) {
            //数据库连接失败异常处理
            e.printStackTrace();
            a="上传失败，请重试！";
        }catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
            a="上传失败，请重试！";
        }finally {
            return a;
        }

    }
}
