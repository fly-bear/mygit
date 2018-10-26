package com.flybear.SpringMVC.Dao;
//这是管理员查询
import com.flybear.SpringMVC.beans.MyRequest;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

@Repository
public class GetMsg {
    private Connection con; //声明Connection对象
    private String driver = "com.mysql.jdbc.Driver";//驱动程序名
    private String url = "jdbc:mysql://localhost:3306/lxdjb?useUnicode=true&characterEncoding=utf8";//URL指向要访问的数据库名mydata
    private String user = "root";
    private String password = "hyggbgb";//MySQL配置时的密码


    public ArrayList search(MyRequest p,String logname) {
        String week = p.getWeek();
        String major = p.getMajor();
        String classes = p.getClasses();
        String isleft = p.getIsleft();
        String isinlib = p.getIsinlib();
        String condition1;
        String condition2;
        String condition3;
        String condition4;
        String condition5;
        String condition="where ";

        if(week.equals("全部")){
            condition1="";
        } else {
            condition1=" and week="+week;
        }
        if(major.equals("全部")){
            condition2="";
        } else{
            condition2=" and major=\""+major+"\"";
        }
        if(classes.equals("全部")){
            condition3="";
        } else{
            condition3=" and classes=\""+major+classes+"\"";
        }
        if(isinlib.equals("全部")){
            condition4="";
        }else{
            condition4=" and isinlib=\""+isinlib+"\"";
        }
        if(isleft.equals("全部")){
            condition5="";
        }else {
            condition5=" and isleft=\""+isleft+"\"";
        }

        if(logname.equals("flybear")){
            if(!condition1.equals("")){
                condition=condition+condition1.substring(5)+condition2+condition3+condition4+condition5;
            }
            else if(!condition2.equals("")){
                condition=condition+condition2.substring(5)+condition3+condition4+condition5;
            }
            else if(!condition3.equals("")){
                condition=condition+condition3.substring(5)+condition4+condition5;
            }else if(!condition4.equals("")){
                condition=condition+condition4.substring(5)+condition5;
            }else if(!condition5.equals("")){
                condition=condition+condition5.substring(5);
            }
            else{
                condition="";
            }
        }else{
            condition=condition+"classes='"+logname+"'"+condition1+condition2+condition3;
        }


        String sql = "select spcid,week,classes,id,name,aim,isinlib,reason,leavetime,isleft,returntime,status from mytable " + condition;
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
                tempmap.put("序列号", rs.getString("spcid"));
                tempmap.put("周数", rs.getString("week"));
                tempmap.put("班级", rs.getString("classes"));
                tempmap.put("学号", rs.getString("id"));
                tempmap.put("姓名", rs.getString("name"));
                tempmap.put("目的地", rs.getString("aim"));
                tempmap.put("是否离汉",rs.getString("isleft"));
                tempmap.put("武汉库",rs.getString("isinlib"));
                tempmap.put("理由", rs.getString("reason"));
                tempmap.put("离校时间", rs.getString("leavetime"));
                tempmap.put("返校时间", rs.getString("returntime"));
                tempmap.put("状态", rs.getString("status"));
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