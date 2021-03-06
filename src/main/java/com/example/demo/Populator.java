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
        Hospital hospital1 = new Hospital("Riverside Methodist Hospital", new Coordinates(12.1, 12.1));
        hospitalRepo.save(hospital1);
        Hospital hospital2 = new Hospital("Grant Medical Center", new Coordinates(-82.9911,39.9600));
        hospitalRepo.save(hospital2);
        Hospital hospital3 = new Hospital("Nationwide Children's Hospital", new Coordinates(14.1, 14.1));
        hospitalRepo.save(hospital3);
        Hospital hospital4 = new Hospital("St Ann's Hospital", new Coordinates(15.1, 15.1));
        hospitalRepo.save(hospital4);
        Hospital hospital5 = new Hospital("Mt. Carmel East Hospital", new Coordinates(16.1, 16.1));
        hospitalRepo.save(hospital5);
        Hospital hospital6 = new Hospital("Mt. Carmel West Hospital", new Coordinates(-83.0202, 39.9574));
        hospitalRepo.save(hospital6);
        Hospital hospital7 = new Hospital("Ohio State University", new Coordinates(12.1, 12.1));
        hospitalRepo.save(hospital7);
        Hospital hospital8 = new Hospital("Ohio State University East", new Coordinates(12.1, 12.1));
        hospitalRepo.save(hospital8);
        Hospital hospital9 = new Hospital("NCH Lewis Center", new Coordinates(12.1, 12.1));
        hospitalRepo.save(hospital9);
        Hospital hospital10 = new Hospital("Doctors West", new Coordinates(12.1, 12.1));
        hospitalRepo.save(hospital10);
        Hospital hospital11 = new Hospital("Dublin Methodist Hospital", new Coordinates(12.1, 12.1));
        hospitalRepo.save(hospital11);

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
        Vitals vital7 = new Vitals("16/120", 78, 12, "Lethargic", "Dilated", "120", "Clear");
        vitalRepo.save(vital7);
        Vitals vital8 = new Vitals("17/120", 90, 13, "Alert", "Responsive", "130", "Rhonchi");
        vitalRepo.save(vital8);
        Vitals vital9 = new Vitals("18/120", 80, 14, "Unresponsive", "Unresponsive", "140", "Rales");
        vitalRepo.save(vital9);
        Vitals vital10 = new Vitals("19/120", 75, 15, "Unresponsive", "Unresponsive", "150", "Stridor");
        vitalRepo.save(vital10);
        Vitals vital11 = new Vitals("20/120", 72, 16, "Alert", "Dilated", "160", "Wheezing");
        vitalRepo.save(vital11);
        Vitals vital12 = new Vitals("21/120", 95, 17, "Lethargic", "Dilated", "200", "Clear");
        vitalRepo.save(vital12);

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
        CareGiver caregiver7 = new CareGiver(17, 17, 18, 19, "Nov 25, 2020");
        careGiverRepo.save(caregiver7);
        CareGiver caregiver8 = new CareGiver(18, 18, 19, 20, "Nov 27, 2020");
        careGiverRepo.save(caregiver8);
        CareGiver caregiver9 = new CareGiver(19, 19, 20, 21, "Nov 26, 2020");
        careGiverRepo.save(caregiver9);
        CareGiver caregiver10 = new CareGiver(20, 20, 21, 22, "Nov 20, 2020");
        careGiverRepo.save(caregiver10);
        CareGiver caregiver11 = new CareGiver(21, 21, 22, 23, "Nov 18, 2020");
        careGiverRepo.save(caregiver11);
        CareGiver caregiver12 = new CareGiver(22, 22, 23, 24, "Nov 10, 2020");
        careGiverRepo.save(caregiver12);


        Patient patient1 = new Patient(12, 22, "Male", vital1, "Not Available", "Peanuts", "Penicillin", "green", "Heavy alcohol use","Under the influence","Flipped a car while driving under the influence","43.022835199999996, -82.98496", caregiver1, hospital5 );
        patientStorage.savePatient(patient1);
        Patient patient2 = new Patient(13, 23, "Female", vital2, "Not Available", "Penicillin", "Fluids", "yellow", "None","Back is hurting","Fell over and couldn't get up","39.022835199999996, -82.98496", caregiver2, hospital5 );
        patientStorage.savePatient(patient2);
        Patient patient3 = new Patient(14, 24, "Male", vital3, "Not Available", "Latex", "Insulin", "red", "none","Gun shot wound","Got in a bar fight","49.022835199999996, -82.98496", caregiver3, hospital6 );
        patientStorage.savePatient(patient3);
        Patient patient4 = new Patient(15, 25, "Female", vital4, "Not Available", "None", "Prozac", "yellow", "Excessive drug use","Broken knee","Sports injury", "40.022835199999996, -82.98496",caregiver4, hospital6 );
        patientStorage.savePatient(patient4);
        Patient patient5 = new Patient(16, 26, "Male", vital5, "Not Available", "None", "Morphine", "green", "Heavy drinker","Can't breathe","Mixed alcohol and morphine together ","41.022835199999996, -82.98496", caregiver5,hospital6 );
        patientStorage.savePatient(patient5);
        Patient patient6 = new Patient(17, 27, "Female", vital6, "Not Available", "None", "Benazepril", "red", "None", "Chest pains","Had a heart attack","43.022835199999996, -82.98496",caregiver6, hospital9);
        patientStorage.savePatient(patient6);

        Patient patient7 = new Patient(18, 45, "Male", vital7, "Not Available", "Peanuts", "Penicillin", "green", "Heavy alcohol use","Under the influence","Flipped a car while driving under the influence","48.022835199999996, -82.98496", caregiver9, hospital2 );
        patientStorage.savePatient(patient7);
        Patient patient8 = new Patient(19, 46, "Female", vital8, "Not Available", "Penicillin", "Fluids", "yellow", "None","Back is hurting","Fell over and couldn't get up","52.022835199999996, -82.98496", caregiver8, hospital11 );
        patientStorage.savePatient(patient8);
        Patient patient9 = new Patient(20, 47, "Male", vital9, "Not Available", "Latex", "Insulin", "red", "none","Gun shot wound","Got in a bar fight","43.022835199999996, -82.98496", caregiver9, hospital2 );
        patientStorage.savePatient(patient9);
        Patient patient10 = new Patient(21, 48, "Female", vital10, "Not Available", "None", "Prozac", "yellow", "Excessive drug use","Broken knee","Sports injury", "39.022835199999996, -82.98496",caregiver10, hospital8 );
        patientStorage.savePatient(patient10);
        Patient patient11 = new Patient(22, 49, "Male", vital11, "Not Available", "None", "Morphine", "green", "Heavy drinker","Can't breathe","Mixed alcohol and morphine together ","56.022835199999996, -82.98496", caregiver11,hospital8 );
        patientStorage.savePatient(patient11);
        Patient patient12 = new Patient(23, 50, "Female", vital12, "Not Available", "None", "Benazepril", "red", "None", "Chest pains","Had a heart attack","39.022835199999996, -82.98496",caregiver12, hospital2);
        patientStorage.savePatient(patient12);
    }

    }

