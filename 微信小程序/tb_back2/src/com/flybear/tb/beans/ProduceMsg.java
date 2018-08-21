package com.flybear.tb.beans;

import org.springframework.stereotype.Component;

@Component
public class ProduceMsg {
    private String openid;
    private int number;
    private float money;

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public float getMoney() {
        return money;
    }

    public void setMoney(float money) {
        this.money = money;
    }
}
