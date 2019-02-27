package com.petrochina.weixin.Task;

import org.quartz.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @Author:Zhengxiong.Dai
 * @Date:2019/1/27 10:02
 **/
@Configuration
public class taskConfig {
    @Bean
    public JobDetail jobDetail(){
        return JobBuilder.newJob(MyTask.class).withIdentity("myTask").storeDurably().build();
    }
    @Bean
    public Trigger uploadTaskTrigger() {
        CronScheduleBuilder scheduleBuilder = CronScheduleBuilder.cronSchedule("*/5 * * * * ?");
        return TriggerBuilder.newTrigger().forJob(jobDetail())
                .withIdentity("uploadTask")
                .withSchedule(scheduleBuilder)
                .build();
    }
}
