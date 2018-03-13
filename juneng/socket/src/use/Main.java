package use;

import java.io.IOException;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args){
//        String[] command={"check0navigate00","check0driver0000","searchautomobileALL"};
//        String command="searchautomobileALL";
//        tcp_client.client("106.15.199.206",6666,command);//这个是一次发送多条指令
        tcp_client_shell.client("localhost",6666);//这个是交互式，输入exit退出
                                                            // (一定要正常退出！！！！不要中断，除非抛出异常自己退出，不然服务器容易挂)
    }
}
