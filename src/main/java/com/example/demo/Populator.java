package com.example.demo;

import com.example.demo.resource.CareGiver;
import com.example.demo.resource.Patient;
import com.example.demo.resource.Vitals;
import com.example.demo.storage.CareGiverRepository;
import com.example.demo.storage.PatientStorage;
import com.example.demo.storage.VitalRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private PatientStorage patientStorage;
    private VitalRepository vitalRepo;
    private CareGiverRepository careGiverRepo;

    public Populator(PatientStorage patientStorage, VitalRepository vitalRepo, CareGiverRepository careGiverRepo) {
        this.patientStorage = patientStorage;
        this.vitalRepo = vitalRepo;
        this.careGiverRepo = careGiverRepo;
    }
    @Override
    public void run(String... args) throws Exception{
        Vitals vital1 = new Vitals("10/120", 78, 12, "alert", "dilated", "120", "great");
        vitalRepo.save(vital1);
        Vitals vital2 = new Vitals("11/120", 90, 13, "not awake", "constricted", "130", "raspy");
        vitalRepo.save(vital2);
        Vitals vital3 = new Vitals("12/120", 80, 14, "dead", "dilated", "140", "awful");
        vitalRepo.save(vital3);
        Vitals vital4 = new Vitals("13/120", 75, 15, "unconscious", "constricted", "150", "could be better");
        vitalRepo.save(vital4);
        Vitals vital5 = new Vitals("14/120", 72, 16, "hyper", "dilated", "160", "not great");
        vitalRepo.save(vital5);
        Vitals vital6 = new Vitals("15/120", 95, 17, "non-responsive", "constricted", "200", "awesome");
        vitalRepo.save(vital6);

        CareGiver caregiver1 = new CareGiver(10, 11, 12, 13, "Nov 25, 2020");
        careGiverRepo.save(caregiver1);
        CareGiver caregiver2 = new CareGiver(11, 12, 13, 14, "Nov 27, 2020");
        careGiverRepo.save(caregiver2);
        CareGiver caregiver3 = new CareGiver(12, 13, 14, 15, "Nov 26, 2020");
        careGiverRepo.save(caregiver3);
        CareGiver caregiver4 = new CareGiver(13, 14, 15, 16, "Nov 20, 2020");
        careGiverRepo.save(caregiver4);
        CareGiver caregiver5 = new CareGiver(14, 15, 16, 17, "Nov 18, 2020");
        careGiverRepo.save(caregiver5);
        CareGiver caregiver6 = new CareGiver(15, 16, 17, 18, "Nov 10, 2020");
        careGiverRepo.save(caregiver6);

        Patient patient1 = new Patient(12, 22, "male", vital1, "Not Available", "peanuts", "penicillin", "green", "bad","underInfluence","flipped a car while driving under the influence", caregiver1);
        patientStorage.savePatient(patient1);
        Patient patient2 = new Patient(13, 23, "female", vital2, "Not Available", "penicillin", "fluids", "yellow", "none","back hurts","fell over and couldn't get up", caregiver2);
        patientStorage.savePatient(patient2);
        Patient patient3 = new Patient(14, 24, "male", vital3, "Not Available", "latex", "insulin", "red", "none","gun shot","bar fight", caregiver3);
        patientStorage.savePatient(patient3);
        Patient patient4 = new Patient(15, 25, "female", vital4, "Not Available", "ok", "prozac", "yellow", "a lot of drug use","broken knee","playing sports", caregiver4);
        patientStorage.savePatient(patient4);
        Patient patient5 = new Patient(16, 26, "male", vital5, "Not Available", "ok", "morphine", "green", "heavy drinker","can't breathe","mixed alcohol and morphine together ", caregiver5);
        patientStorage.savePatient(patient5);
        Patient patient6 = new Patient(17, 27, "female", vital6, "Not Available", "ok", "benazepril", "red", "not good", "heart problems","had a heart attack",caregiver6);
        patientStorage.savePatient(patient6);
    }

    }

