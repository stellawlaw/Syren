package com.example.demo;

import com.example.demo.resource.*;
import com.example.demo.storage.CareGiverRepository;
import com.example.demo.storage.HospitalRepository;
import com.example.demo.storage.PatientStorage;
import com.example.demo.storage.VitalRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private PatientStorage patientStorage;
    private VitalRepository vitalRepo;
    private CareGiverRepository careGiverRepo;
    private HospitalRepository hospitalRepo;

    public Populator(PatientStorage patientStorage, VitalRepository vitalRepo, CareGiverRepository careGiverRepo, HospitalRepository hospitalRepo) {
        this.patientStorage = patientStorage;
        this.vitalRepo = vitalRepo;
        this.careGiverRepo = careGiverRepo;
        this.hospitalRepo = hospitalRepo;
    }
    @Override
    public void run(String... args) throws Exception{
        Hospital hospital1 = new Hospital("Riverside Hospital", new Coordinates(12.1, 12.1));
        hospitalRepo.save(hospital1);
        Hospital hospital2 = new Hospital("Grant Hospital", new Coordinates(13.1, 13.1));
        hospitalRepo.save(hospital2);
        Hospital hospital3 = new Hospital("Nationwide Children's Hospital", new Coordinates(14.1, 14.1));
        hospitalRepo.save(hospital3);
        Hospital hospital4 = new Hospital("St Ann's Hospital", new Coordinates(15.1, 15.1));
        hospitalRepo.save(hospital4);
        Hospital hospital5 = new Hospital("Mt. Carmel East Hospital", new Coordinates(16.1, 16.1));
        hospitalRepo.save(hospital5);
        Hospital hospital6 = new Hospital("Mt. Carmel West Hospital", new Coordinates(17.1, 17.1));
        hospitalRepo.save(hospital6);

        Vitals vital1 = new Vitals("10/120", 78, 12, "Alert", "Dilated", "120", "Clear");
        vitalRepo.save(vital1);
        Vitals vital2 = new Vitals("11/120", 90, 13, "Lethargic", "Responsive", "130", "Rhonchi");
        vitalRepo.save(vital2);
        Vitals vital3 = new Vitals("12/120", 80, 14, "Unresponsive", "Unresponsive", "140", "Rales");
        vitalRepo.save(vital3);
        Vitals vital4 = new Vitals("13/120", 75, 15, "Alert", "Unresponsive", "150", "Stridor");
        vitalRepo.save(vital4);
        Vitals vital5 = new Vitals("14/120", 72, 16, "Lethargic", "Dilated", "160", "Wheezing");
        vitalRepo.save(vital5);
        Vitals vital6 = new Vitals("15/120", 95, 17, "Unresponsive", "Dilated", "200", "Clear");
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

        Patient patient1 = new Patient(12, 22, "Male", vital1, "Not Available", "Peanuts", "Penicillin", "green", "Heavy alcohol use","Under the influence","Flipped a car while driving under the influence", caregiver1, hospital2 );
        patientStorage.savePatient(patient1);
        Patient patient2 = new Patient(13, 23, "Female", vital2, "Not Available", "Penicillin", "Fluids", "yellow", "None","Back is hurting","Fell over and couldn't get up", caregiver2, hospital2 );
        patientStorage.savePatient(patient2);
        Patient patient3 = new Patient(14, 24, "Male", vital3, "Not Available", "Latex", "Insulin", "red", "none","Gun shot wound","Got in a bar fight", caregiver3, hospital3 );
        patientStorage.savePatient(patient3);
        Patient patient4 = new Patient(15, 25, "Female", vital4, "Not Available", "None", "Prozac", "yellow", "Excessive drug use","Broken knee","Sports injury", caregiver4, hospital3 );
        patientStorage.savePatient(patient4);
        Patient patient5 = new Patient(16, 26, "Male", vital5, "Not Available", "None", "Morphine", "green", "Heavy drinker","Can't breathe","Mixed alcohol and morphine together ", caregiver5,hospital6 );
        patientStorage.savePatient(patient5);
        Patient patient6 = new Patient(17, 27, "Female", vital6, "Not Available", "None", "Benazepril", "red", "None", "Chest pains","Had a heart attack",caregiver6, hospital6);
        patientStorage.savePatient(patient6);
    }

    }

