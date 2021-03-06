package com.example.demo.controllers;

import com.example.demo.resource.CareGiver;
import com.example.demo.resource.Hospital;
import com.example.demo.resource.Patient;
import com.example.demo.resource.Vitals;
import com.example.demo.storage.CareGiverRepository;
import com.example.demo.storage.HospitalRepository;
import com.example.demo.storage.PatientStorage;
import com.example.demo.storage.VitalRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class PatientController {
    private PatientStorage patientStorage;
    private VitalRepository vitalRepo;
    private CareGiverRepository careGiverRepo;
    private HospitalRepository hospitalRepo;

    public PatientController(PatientStorage patientStorage, VitalRepository vitalRepo, CareGiverRepository careGiverRepo, HospitalRepository hospitalRepo) {
        this.patientStorage = patientStorage;
        this.vitalRepo = vitalRepo;
        this.careGiverRepo = careGiverRepo;
        this.hospitalRepo = hospitalRepo;
    }

    @GetMapping("/api/patients")
    public Iterable<Patient> retrieveAllPatients() {
        return patientStorage.retrieveAllPatients();
    }

    @GetMapping("/api/hospitals")
    public Iterable<Hospital> retrieveAllHospitals() {
        return hospitalRepo.findAll();
    }
    
    @GetMapping("/api/patients/{id}")
    public Patient retrievePatientById(@PathVariable Long id){
        return patientStorage.retrievedPatientById(id);
    }

    @GetMapping("/api/patients/hospital/{id}")
    public Iterable<Patient> retrievePatientsByHospitalId(@PathVariable Long id){
        return patientStorage.retrievePatientsFromHospitalById(id);
    }

    @PostMapping("/api/patients/hospital/{id}")
    public  Iterable<Patient> addPatient(@RequestBody Patient patientToAdd, @PathVariable Long id){
        hospitalRepo.save(patientToAdd.getHospital());
        careGiverRepo.save(patientToAdd.getCareGiver());
        vitalRepo.save(patientToAdd.getVitals());
        patientStorage.savePatient(patientToAdd);
        System.out.println(id);
        return patientStorage.retrievePatientsFromHospitalById(id);
    }
    @PutMapping("/api/patients")
    public Iterable<Patient> editPatient(@RequestBody Patient patientToEdit){
        if(patientToEdit.getId()!= null){
            hospitalRepo.save(patientToEdit.getHospital());
            careGiverRepo.save(patientToEdit.getCareGiver());
            vitalRepo.save(patientToEdit.getVitals());
            patientStorage.savePatient((patientToEdit));
        }
        return patientStorage.retrieveAllPatients();
    }
    @PatchMapping("/api/patients/{id}/vitals")
    public Patient changePatientsVitals(@RequestBody Vitals newVital, @PathVariable long id){
        Patient vitalToChange = patientStorage.retrievedPatientById(id);
        vitalToChange.changeVital(newVital);
        vitalRepo.save(newVital);
        patientStorage.savePatient(vitalToChange);
        return vitalToChange;
    }
    @PatchMapping("/api/patients/{id}/careGiver")
    public Patient changePatientsCareGiver(@RequestBody CareGiver newCareGiver, @PathVariable long id){
        Patient careGiverToChange = patientStorage.retrievedPatientById(id);
        careGiverToChange.changeCareGiver(newCareGiver);
        careGiverRepo.save(newCareGiver);
        patientStorage.savePatient(careGiverToChange);
        return careGiverToChange;
    }
    @PatchMapping("/api/patients/{id}/levelOfEmergency/{newLevelOfEmergency}")
    public Patient changeTheLevelOfEmergency(@PathVariable String newLevelOfEmergency, @PathVariable Long id){
        System.out.println(newLevelOfEmergency);
        Patient levelOfEmergencyToChange = patientStorage.retrievedPatientById(id);
        levelOfEmergencyToChange.changeLevelOfEmergency(newLevelOfEmergency);
        patientStorage.savePatient(levelOfEmergencyToChange);
        System.out.println(levelOfEmergencyToChange);
        return levelOfEmergencyToChange;
    }
    @DeleteMapping("/api/patients/{id}")
    public Iterable<Patient> deletePatientById(@PathVariable Long id){
        Patient patient = patientStorage.retrievedPatientById(id);
        patientStorage.deletePatientById(id);
        Hospital hospital = hospitalRepo.findById(patient.getHospital().getId()).get();
        return hospital.getPatients();
    }

    @GetMapping("/api/hospital/{id}")
    public Hospital retrieveHospitalById(@PathVariable Long id){
        return hospitalRepo.findById(id).get();
    }
}
