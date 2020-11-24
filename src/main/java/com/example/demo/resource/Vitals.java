package com.example.demo.resource;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;
@Entity
public class Vitals {
    @Id
    @GeneratedValue
    private Long id;

    private int bp;
    private int hr;
    private String location;
    private int rr;
    private String pupils;
    private String ekg;
    private String lungSounds;

    protected Vitals(){

    }

    public Vitals(int bp, int hr, int rr, String location, String pupils, String ekg, String lungSounds) {
        this.bp = bp;
        this.hr = hr;
        this.location = location;
        this.rr = rr;
        this.pupils = pupils;
        this.ekg = ekg;
        this.lungSounds = lungSounds;
    }

    public int getBp() {
        return bp;
    }

    public int getHr() {
        return hr;
    }

    public String getLocation() {
        return location;
    }

    public int getRr() {
        return rr;
    }

    public String getPupils() {
        return pupils;
    }

    public String getEkg() {
        return ekg;
    }

    public String getLungSounds() {
        return lungSounds;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Vitals{" +
                "id=" + id +
                ", BP=" + bp +
                ", HR=" + hr +
                ", location='" + location + '\'' +
                ", RR=" + rr +
                ", pupils='" + pupils + '\'' +
                ", EKG='" + ekg + '\'' +
                ", lungSounds='" + lungSounds + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Vitals vitals = (Vitals) o;
        return bp == vitals.bp &&
                hr == vitals.hr &&
                rr == vitals.rr &&
                Objects.equals(id, vitals.id) &&
                Objects.equals(location, vitals.location) &&
                Objects.equals(pupils, vitals.pupils) &&
                Objects.equals(ekg, vitals.ekg) &&
                Objects.equals(lungSounds, vitals.lungSounds);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, bp, hr, location, rr, pupils, ekg, lungSounds);
    }
}
