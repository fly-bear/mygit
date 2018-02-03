package use;

import com.sun.xml.internal.stream.writers.UTF8OutputStreamWriter;

import java.net.Socket;
import java.io.*;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.omg.PortableInterceptor.SYSTEM_EXCEPTION;


public class tcp_client {
    public static final String IP_ADDR = "106.15.199.206";//服务器地址
//    public static final String IP_ADDR = "localhost";
    public static final int PORT = 6666;//服务器端口号
    private static String recieve(DataInputStream input) {
        try {
            Boolean flag=false;
            StringBuilder ret=new StringBuilder();
            while(!flag) {
                byte[] a = new byte[1024];
                int b = 0;
                b = input.read(a);
                //利用正则表达式去除空白字符
                String temp = new String(a, "UTF-8");
                String patt = "SEND_STOP.*";
                //利用正则表达式去除空白字符
                Pattern r = Pattern.compile(patt);
                Matcher m = r.matcher(temp);
                flag = m.find();
                temp = m.replaceAll("");
                ret=ret.append(temp);
            }
            String use=ret.toString();
            return use;
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    public static void client(String IP,int port,String command) {
            Socket socket = null;
            try {
                //创建一个流套接字并将其连接到指定主机上的指定端口号
                long starttime=System.currentTimeMillis();
                socket = new Socket(IP, port);

                //读取服务器端数据
                DataInputStream input = new DataInputStream(socket.getInputStream());
                //向服务器端发送数据
                DataOutputStream out = new DataOutputStream(socket.getOutputStream());
                String ret=recieve(input);
                System.out.println("服务器: " + ret);

                out.write((command+"SEND_STOP").getBytes("UTF-8"));
                out.flush();
                ret = recieve(input);
                long endtime=System.currentTimeMillis();
                if(command.substring(0,5).equals("check")){
                    JSONArray jsonArray = JSONArray.fromObject(ret);
                    List items=JSONArray.fromObject(jsonArray);
                    System.out.println("当前数据表所有字段：");
                    for(Object a:items){
                        System.out.print(a);
                        System.out.print(" \t");
                    }
                    System.out.println();
                }
                else {
                    JSONArray jsonArray = JSONArray.fromObject(ret);
                    String title = jsonArray.getString(0);
                    Map<String, Object> b = JSONObject.fromObject(title);
                    for (String j : b.keySet()) {
                        System.out.print(j);
                        System.out.print(" \t");
                    }
                    System.out.println();
                    for (int i = 0; i < jsonArray.size(); i++) {
                        String test = jsonArray.getString(i);
                        Map<String, Object> a = JSONObject.fromObject(test);
                        for (String j : a.keySet()) {
                            System.out.print(a.get(j));
                            System.out.print("     \t");
                        }
                        System.out.println();
                    }
                }
                System.out.println("总共耗时："+(endtime-starttime)+" ms");
                out.write("close_connect' + 'SEND_STOP".getBytes("UTF-8"));
                out.close();
                input.close();
            } catch (Exception e) {
                System.out.println("客户端异常:" + e.getMessage());
            } finally {
                if (socket != null) {
                    try {
                        socket.close();
                    } catch (IOException e) {
                        socket = null;
                        System.out.println("客户端 finally 异常:" + e.getMessage());
                    }
                }
            }
    }
}