package com.example.demo.resource;

public class Vitals {
    private int BP;
    private int HR;
    private String location;
    private int RR;
    private String pupils;
    private String EKG;
    private String lungSounds;

    public Vitals(int BP, int HR, int RR, String location, String pupils, String EKG, String lungSounds) {
        this.BP = BP;
        this.HR = HR;
        this.location = location;
        this.RR = RR;
        this.pupils = pupils;
        this.EKG = EKG;
        this.lungSounds = lungSounds;
    }

    public int getBP() {
        return BP;
    }

    public int getHR() {
        return HR;
    }

    public String getLocation() {
        return location;
    }

    public int getRR() {
        return RR;
    }

    public String getPupils() {
        return pupils;
    }

    public String getEKG() {
        return EKG;
    }

    public String getLungSounds() {
        return lungSounds;
    }
}
