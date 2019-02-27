package com.petrochina.weixin.Task;

import org.quartz.JobExecutionContext;
import org.springframework.scheduling.quartz.QuartzJobBean;
import org.springframework.stereotype.Component;

/**
 * @Author:Zhengxiong.Dai
 * @Date:2019/1/26 20:56
 **/

@Component
public class MyTask extends QuartzJobBean {
    @Override
    protected void executeInternal(JobExecutionContext jobExecutionContext){
        System.out.println("task");
    }
}
