package use;

import java.io.IOException;

public class Main {
    public static void main(String[] args){
//        String command="insertdriver0,20,5";
//        String command=
        String command="check0ramp00";
        tcp_client.client("106.15.199.206",6666,command);
    }
}
