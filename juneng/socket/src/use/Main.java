package use;

import java.io.IOException;

public class Main {
    public static void main(String[] args){
//        String command="insertdriver\"周道林\",5,0.618";
        String command="searchdriverALL";
        tcp_client.client("106.15.199.206",6666,command);
    }
}
