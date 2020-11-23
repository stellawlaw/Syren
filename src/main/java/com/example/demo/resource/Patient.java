package com.example.demo.resource;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Patient {
    @Id
    @GeneratedValue
    private Long Id;

    private int patientId;
    private int age;
    private String sex;
    @OneToOne
    private Vitals vitals;
    private String medicalHistory;
    private String allergies;
    private String medication;
    private String levelOfEmergency;
    private String drugAndAlcoholHistory;
    @OneToOne
    private CareGiver careGiver;

    protected Patient(){
    }

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

    public Long getId() {
        return Id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Patient patient = (Patient) o;
        return patientId == patient.patientId &&
                age == patient.age &&
                Objects.equals(sex, patient.sex) &&
                Objects.equals(vitals, patient.vitals) &&
                Objects.equals(medicalHistory, patient.medicalHistory) &&
                Objects.equals(allergies, patient.allergies) &&
                Objects.equals(medication, patient.medication) &&
                Objects.equals(levelOfEmergency, patient.levelOfEmergency) &&
                Objects.equals(drugAndAlcoholHistory, patient.drugAndAlcoholHistory) &&
                Objects.equals(careGiver, patient.careGiver) &&
                Objects.equals(Id, patient.Id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(patientId, age, sex, vitals, medicalHistory, allergies, medication, levelOfEmergency, drugAndAlcoholHistory, careGiver, Id);
    }
}
