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
        Vitals vital1 = new Vitals(10, 11, 12, "grandview", "pupils", "ok", "great");
        vitalRepo.save(vital1);
        Vitals vital2 = new Vitals(11, 12, 13, "clintonville", "pupils", "ok", "meh");
        vitalRepo.save(vital2);
        Vitals vital3 = new Vitals(12, 13, 14, "short north", "pupils", "bad", "awful");
        vitalRepo.save(vital3);
        Vitals vital4 = new Vitals(13, 14, 15, "old towne east", "pupils", "meh", "could be better");
        vitalRepo.save(vital4);
        Vitals vital5 = new Vitals(14, 15, 16, "bexley", "pupils", "ok", "not great");
        vitalRepo.save(vital5);
        Vitals vital6 = new Vitals(15, 16, 17, "linden", "pupils", "ok", "awesome");
        vitalRepo.save(vital6);

        CareGiver caregiver1 = new CareGiver(10, 11, 12, 13, "ok");
        careGiverRepo.save(caregiver1);
        CareGiver caregiver2 = new CareGiver(11, 12, 13, 14, "ok");
        careGiverRepo.save(caregiver2);
        CareGiver caregiver3 = new CareGiver(12, 13, 14, 15, "ok");
        careGiverRepo.save(caregiver3);
        CareGiver caregiver4 = new CareGiver(13, 14, 15, 16, "ok");
        careGiverRepo.save(caregiver4);
        CareGiver caregiver5 = new CareGiver(14, 15, 16, 17, "ok");
        careGiverRepo.save(caregiver5);
        CareGiver caregiver6 = new CareGiver(15, 16, 17, 18, "ok");
        careGiverRepo.save(caregiver6);

        Patient patient1 = new Patient(12, 22, "male", vital1, "ok", "ok", "none", "medium", "none", caregiver1);
        patientStorage.savePatient(patient1);
        Patient patient2 = new Patient(13, 23, "female", vital2, "ok", "ok", "none", "medium", "none", caregiver2);
        patientStorage.savePatient(patient2);
        Patient patient3 = new Patient(14, 24, "male", vital3, "ok", "ok", "none", "medium", "none", caregiver3);
        patientStorage.savePatient(patient3);
        Patient patient4 = new Patient(15, 25, "female", vital4, "ok", "ok", "none", "medium", "none", caregiver4);
        patientStorage.savePatient(patient4);
        Patient patient5 = new Patient(16, 26, "male", vital5, "ok", "ok", "none", "medium", "none", caregiver5);
        patientStorage.savePatient(patient5);
        Patient patient6 = new Patient(17, 27, "female", vital6, "ok", "ok", "none", "medium", "none", caregiver6);
        patientStorage.savePatient(patient6);
    }

    }
