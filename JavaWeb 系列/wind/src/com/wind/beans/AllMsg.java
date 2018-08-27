package com.wind.beans;


import org.springframework.stereotype.Component;

@Component
public class AllMsg {
    private String InstantaneousPower,GenerationCapacity,FanSpeed,Hours,GeneratorsNum,Power,ThreePhaseVoltage,
            PowerGridFrequency,PowerGridTransmission,ThreePhaseCurrent,Date;

    public String getInstantaneousPower() {
        return InstantaneousPower;
    }

    public void setInstantaneousPower(String instantaneousPower) {
        InstantaneousPower = instantaneousPower;
    }

    public String getGenerationCapacity() {
        return GenerationCapacity;
    }

    public void setGenerationCapacity(String generationCapacity) {
        GenerationCapacity = generationCapacity;
    }

    public String getFanSpeed() {
        return FanSpeed;
    }

    public void setFanSpeed(String fanSpeed) {
        FanSpeed = fanSpeed;
    }

    public String getHours() {
        return Hours;
    }

    public void setHours(String hours) {
        Hours = hours;
    }

    public String getGeneratorsNum() {
        return GeneratorsNum;
    }

    public void setGeneratorsNum(String generatorsNum) {
        GeneratorsNum = generatorsNum;
    }

    public String getPower() {
        return Power;
    }

    public void setPower(String power) {
        Power = power;
    }

    public String getThreePhaseVoltage() {
        return ThreePhaseVoltage;
    }

    public void setThreePhaseVoltage(String threePhaseVoltage) {
        ThreePhaseVoltage = threePhaseVoltage;
    }

    public String getPowerGridFrequency() {
        return PowerGridFrequency;
    }

    public void setPowerGridFrequency(String powerGridFrequency) {
        PowerGridFrequency = powerGridFrequency;
    }

    public String getPowerGridTransmission() {
        return PowerGridTransmission;
    }

    public void setPowerGridTransmission(String powerGridTransmission) {
        PowerGridTransmission = powerGridTransmission;
    }

    public String getThreePhaseCurrent() {
        return ThreePhaseCurrent;
    }

    public void setThreePhaseCurrent(String threePhaseCurrent) {
        ThreePhaseCurrent = threePhaseCurrent;
    }

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        Date = date;
    }
}
