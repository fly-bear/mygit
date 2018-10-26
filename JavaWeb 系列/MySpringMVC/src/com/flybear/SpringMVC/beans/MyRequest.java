package com.flybear.SpringMVC.beans;

//这是定义前端提交查询的条件字段
import org.springframework.stereotype.Component;

@Component
public class MyRequest {
    private String week;
    private String major;
    private String classes;
    private String spcid;
    private String isleft,isinlib;

    public String getIsleft() {
        return isleft;
    }

    public void setIsleft(String isleft) {
        this.isleft = isleft;
    }

    public String getIsinlib() {
        return isinlib;
    }

    public void setIsinlib(String isinlib) {
        this.isinlib = isinlib;
    }

    public String getSpcid() {
        return spcid;
    }

    public void setSpcid(String spcid) {
        this.spcid = spcid;
    }

    public void setClasses(String classes) {
        this.classes = classes;
    }

    public String getClasses() {
        return classes;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getMajor() {
        return major;
    }

    public void setWeek(String week) {
        this.week = week;
    }

    public String getWeek() {
        return week;
    }
}
