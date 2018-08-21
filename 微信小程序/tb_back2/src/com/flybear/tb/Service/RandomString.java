package com.flybear.tb.Service;

import org.springframework.stereotype.Service;

@Service
public class RandomString {
    public String go(int length){
        String init="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        String result="";
        int index,i;
       for(i=0;i<length;i++){
            index=(int)(Math.random()*35);
            result=result+init.substring(index,index+1);
        }
        return result;
    }
}
