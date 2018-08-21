package com.flybear.SpringMVC.beans;


import org.springframework.stereotype.Component;

@Component
public class Myindex {
    private String index;
//    private String

    public void setIndex(String spcid) {
        this.index = spcid;
    }

    public String getIndex() {
        return index;
    }
}
