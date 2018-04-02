package com.flybear.SpringMVC.beans;

import org.springframework.stereotype.Component;

@Component
public class Statu {
    private String statu;

    public String getStatu() {
        return statu;
    }

    public void setStatu(String statu) {
        this.statu = statu;
    }
}
