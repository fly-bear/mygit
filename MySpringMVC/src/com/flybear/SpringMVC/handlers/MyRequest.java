package com.flybear.SpringMVC.handlers;


import org.springframework.stereotype.Component;

@Component
public class MyRequest {
    private String week;
    private String major;
    private String classes;

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
