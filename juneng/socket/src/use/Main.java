package use;

import java.io.IOException;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args){
//        String command="insertdriver0,20,5";
        String[] command={"check0navigate","insertdriver0,20,5","searchautomobileALL"};
//        String[] command={"check00000test00","search0000test00ALL"};
//        String command="searchautomobileALL";
        tcp_client.client("localhost",6666,command);
    }
}
