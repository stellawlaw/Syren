package com.example.demo.resource;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Patient {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private Hospital hospital;
    private int patientId;
    private int age;
    private String sex;
    private String location;
    @OneToOne
    private Vitals vitals;
    private String medicalHistory;
    private String allergies;
    private String medication;
    private String levelOfEmergency;
    private String drugAndAlcoholHistory;
    private String chiefComplaint;
    private String summary;
    @OneToOne
    private CareGiver careGiver;

    protected Patient() {
    }

    public Patient(int patientId, int age, String sex, Vitals vitals, String medicalHistory, String allergies, String medication, String levelOfEmergency, String drugAndAlcoholHistory, String chiefComplaint, String summary,String location, CareGiver careGiver, Hospital hospital) {
        this.patientId = patientId;
        this.age = age;
        this.sex = sex;
        this.vitals = vitals;
        this.medicalHistory = medicalHistory;
        this.allergies = allergies;
        this.medication = medication;
        this.levelOfEmergency = levelOfEmergency;
        this.drugAndAlcoholHistory = drugAndAlcoholHistory;
        this.chiefComplaint = chiefComplaint;
        this.summary = summary;
        this.location = location;
        this.careGiver = careGiver;
        this.hospital = hospital;
    }

    public String getLocation() {
        return location;
    }

    public Hospital getHospital() {
        return hospital;
    }

    public String getSummary() {
        return summary;
    }

    public String getChiefComplaint() {
        return chiefComplaint;
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
        return id;
    }

    public void changeVital(Vitals newVital) {
        vitals = newVital;
    }

    public void changeCareGiver(CareGiver newCareGiver) {
        careGiver = newCareGiver;
    }

    public void changeLevelOfEmergency(String newLevelOfEmergency) {
        levelOfEmergency = newLevelOfEmergency;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Patient patient = (Patient) o;
        return patientId == patient.patientId &&
                age == patient.age &&
                Objects.equals(id, patient.id) &&
                Objects.equals(hospital, patient.hospital) &&
                Objects.equals(sex, patient.sex) &&
                Objects.equals(location, patient.location) &&
                Objects.equals(vitals, patient.vitals) &&
                Objects.equals(medicalHistory, patient.medicalHistory) &&
                Objects.equals(allergies, patient.allergies) &&
                Objects.equals(medication, patient.medication) &&
                Objects.equals(levelOfEmergency, patient.levelOfEmergency) &&
                Objects.equals(drugAndAlcoholHistory, patient.drugAndAlcoholHistory) &&
                Objects.equals(chiefComplaint, patient.chiefComplaint) &&
                Objects.equals(summary, patient.summary) &&
                Objects.equals(careGiver, patient.careGiver);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, hospital, patientId, age, sex, location, vitals, medicalHistory, allergies, medication, levelOfEmergency, drugAndAlcoholHistory, chiefComplaint, summary, careGiver);
    }

    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                ", hospital=" + hospital +
                ", patientId=" + patientId +
                ", age=" + age +
                ", sex='" + sex + '\'' +
                ", location='" + location + '\'' +
                ", vitals=" + vitals +
                ", medicalHistory='" + medicalHistory + '\'' +
                ", allergies='" + allergies + '\'' +
                ", medication='" + medication + '\'' +
                ", levelOfEmergency='" + levelOfEmergency + '\'' +
                ", drugAndAlcoholHistory='" + drugAndAlcoholHistory + '\'' +
                ", chiefComplaint='" + chiefComplaint + '\'' +
                ", summary='" + summary + '\'' +
                ", careGiver=" + careGiver +
                '}';
    }
}
