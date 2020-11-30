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

    private String bp;
    private int hr;
    private String loc;
    private int rr;
    private String pupils;
    private String ekg;
    private String lungSounds;

    protected Vitals(){

    }

    public Vitals(String bp, int hr, int rr, String loc, String pupils, String ekg, String lungSounds) {
        this.bp = bp;
        this.hr = hr;
        this.loc = loc;
        this.rr = rr;
        this.pupils = pupils;
        this.ekg = ekg;
        this.lungSounds = lungSounds;
    }

    public String getBp() {
        return bp;
    }

    public int getHr() {
        return hr;
    }

    public String getLoc() {
        return loc;
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
                ", bp='" + bp + '\'' +
                ", hr=" + hr +
                ", loc='" + loc + '\'' +
                ", rr=" + rr +
                ", pupils='" + pupils + '\'' +
                ", ekg='" + ekg + '\'' +
                ", lungSounds='" + lungSounds + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Vitals vitals = (Vitals) o;
        return hr == vitals.hr &&
                rr == vitals.rr &&
                Objects.equals(id, vitals.id) &&
                Objects.equals(bp, vitals.bp) &&
                Objects.equals(loc, vitals.loc) &&
                Objects.equals(pupils, vitals.pupils) &&
                Objects.equals(ekg, vitals.ekg) &&
                Objects.equals(lungSounds, vitals.lungSounds);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, bp, hr, loc, rr, pupils, ekg, lungSounds);
    }
}
