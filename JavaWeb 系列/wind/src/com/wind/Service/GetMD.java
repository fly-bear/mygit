package com.wind.Service;

import com.wind.Dao.GetMsg;
import com.wind.beans.AllMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeSet;

@Service
public class GetMD {
    @Autowired
    GetMsg getMsg;
    @Autowired
    AllMsg allMsg;
    public ModelAndView setmd(ModelAndView md){
        allMsg=getMsg.GetOneDayMsg(allMsg);
        Map<Integer,String[]> sevenday=getMsg.GetSevenDayMsg();
        md.addObject("瞬时功率",allMsg.getInstantaneousPower());
        md.addObject("当天发电量",allMsg.getGenerationCapacity());
        md.addObject("风机转速",allMsg.getFanSpeed());
        md.addObject("发电小时数",allMsg.getHours());
        md.addObject("发电机数量",allMsg.getGeneratorsNum());
        md.addObject("日期",allMsg.getDate());
        md.addObject("功率",allMsg.getPower());
        md.addObject("电网三相电压",allMsg.getThreePhaseVoltage());
        md.addObject("电网频率",allMsg.getPowerGridFrequency());
        md.addObject("电网传输",allMsg.getPowerGridTransmission());
        md.addObject("三相电流",allMsg.getThreePhaseCurrent());
        ArrayList keys = new ArrayList<String>();
        ArrayList values = new ArrayList<String>();
        for(Object each: sevenday.keySet()){
            keys.add((String)sevenday.get(each)[0]);
            values.add((String)sevenday.get(each)[1]);
        }
        md.addObject("七天日期",keys);
        md.addObject("七天发电量",values);
        md.addObject("发电量变化",String.valueOf((Float.valueOf((String) values.get(6))-Float.valueOf((String) values.get(5)))/Float.valueOf((String) values.get(6))*100)+"%");
        return md;
    }
}
