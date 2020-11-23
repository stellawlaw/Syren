package com.example.demo.resource;

public class Patient {
    private int patientId;
    private int age;
    private String sex;
    private Vitals vitals;
    private String medicalHistory;
    private String allergies;
    private String medication;
    private String levelOfEmergency;
    private String drugAndAlcoholHistory;
    private CareGiver careGiver;

    public Patient(int patientId, int age, String sex, Vitals vitals, String medicalHistory, String allergies, String medication, String levelOfEmergency, String drugAndAlcoholHistory,CareGiver careGiver) {
        this.patientId = patientId;
        this.age = age;
        this.sex = sex;
        this.vitals = vitals;
        this.medicalHistory = medicalHistory;
        this.allergies = allergies;
        this.medication = medication;
        this.levelOfEmergency = levelOfEmergency;
        this.drugAndAlcoholHistory = drugAndAlcoholHistory;
        this.careGiver = careGiver;
    }

    public CareGiver getCareGiver() {
        return careGiver;
    }

    public int getPatientId() {
        return patientId;
    }

    public int getAge() {
        return age;
    }

    public String getSex() {
        return sex;
    }

    public Vitals getVitals() {
        return vitals;
    }

    public String getMedicalHistory() {
        return medicalHistory;
    }

    public String getAllergies() {
        return allergies;
    }

    public String getMedication() {
        return medication;
    }

    public String getLevelOfEmergency() {
        return levelOfEmergency;
    }

    public String getDrugAndAlcoholHistory() {
        return drugAndAlcoholHistory;
    }
}
