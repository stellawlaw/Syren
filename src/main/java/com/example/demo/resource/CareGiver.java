package com.example.demo.resource;

public class CareGiver {
    private int runId;
    private int careGiverId1;
    private int careGiverId2;
    private int careGiverId3;
    private String dateAndTime;

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
}
