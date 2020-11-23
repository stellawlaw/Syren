package com.example.demo.resource;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.Objects;
@Entity
public class Vitals {
    @Id
    @GeneratedValue
    private Long Id;

    private int BP;
    private int HR;
    private String location;
    private int RR;
    private String pupils;
    private String EKG;
    private String lungSounds;

    protected Vitals(){

    }

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

    public Long getId() {
        return Id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Vitals vitals = (Vitals) o;
        return BP == vitals.BP &&
                HR == vitals.HR &&
                RR == vitals.RR &&
                Objects.equals(Id, vitals.Id) &&
                Objects.equals(location, vitals.location) &&
                Objects.equals(pupils, vitals.pupils) &&
                Objects.equals(EKG, vitals.EKG) &&
                Objects.equals(lungSounds, vitals.lungSounds);
    }

    @Override
    public int hashCode() {
        return Objects.hash(Id, BP, HR, location, RR, pupils, EKG, lungSounds);
    }
}
