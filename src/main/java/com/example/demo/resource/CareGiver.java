package com.example.demo.resource;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.Objects;
@Entity
public class CareGiver {
    @Id
    @GeneratedValue
    private Long id;

    private int runId;
    private int careGiverId1;
    private int careGiverId2;
    private int careGiverId3;
    private String dateAndTime;
    protected CareGiver(){
    }

    public CareGiver(int runId, int careGiverId1, int careGiverId2, int careGiverId3, String dateAndTime) {
        this.runId = runId;
        this.careGiverId1 = careGiverId1;
        this.careGiverId2 = careGiverId2;
        this.careGiverId3 = careGiverId3;
        this.dateAndTime = dateAndTime;
    }

    public int getRunId() {
        return runId;
    }

    public int getCareGiverId1() {
        return careGiverId1;
    }

    public int getCareGiverId2() {
        return careGiverId2;
    }

    public int getCareGiverId3() {
        return careGiverId3;
    }

    public String getDateAndTime() {
        return dateAndTime;
    }

    public Long getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CareGiver careGiver = (CareGiver) o;
        return runId == careGiver.runId &&
                careGiverId1 == careGiver.careGiverId1 &&
                careGiverId2 == careGiver.careGiverId2 &&
                careGiverId3 == careGiver.careGiverId3 &&
                Objects.equals(id, careGiver.id) &&
                Objects.equals(dateAndTime, careGiver.dateAndTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, runId, careGiverId1, careGiverId2, careGiverId3, dateAndTime);
    }
}
