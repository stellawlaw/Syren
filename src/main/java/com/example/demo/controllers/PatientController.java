package com.example.demo.controllers;

import com.example.demo.resource.CareGiver;
import com.example.demo.resource.Patient;
import com.example.demo.resource.Vitals;
import com.example.demo.storage.CareGiverRepository;
import com.example.demo.storage.PatientStorage;
import com.example.demo.storage.VitalRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class PatientController {
    private PatientStorage patientStorage;
    private VitalRepository vitalRepo;
    private CareGiverRepository careGiverRepo;

    public PatientController(PatientStorage patientStorage, VitalRepository vitalRepo, CareGiverRepository careGiverRepo) {
        this.patientStorage = patientStorage;
        this.vitalRepo = vitalRepo;
        this.careGiverRepo = careGiverRepo;
    }

    @GetMapping("/api/patients")
    public Iterable<Patient> retrieveAllPatients(){
        return patientStorage.retrieveAllPatients();
    }
    @GetMapping("/api/patients/{id}")
    public Patient retrievePatientById(@PathVariable Long id){
        return patientStorage.retrievedPatientById(id);
    }
    @PostMapping("/patients")
    public  Iterable<Patient> addPatient(@RequestBody Patient patientToAdd){
        patientStorage.savePatient(patientToAdd);
        return patientStorage.retrieveAllPatients();
    }
    @PutMapping("/patients")
    public Iterable<Patient> editPatient(@RequestBody Patient patientToEdit){
        if(patientToEdit.getId()!=null){
            patientStorage.savePatient((patientToEdit));
        }
        return patientStorage.retrieveAllPatients();
    }
    @PatchMapping("/patients/{Id}/vitals")
    public Patient addVitalToPatient(@RequestBody Vitals vitalToAdd, @PathVariable long Id){
        Vitals vital = new Vitals(vitalToAdd.getBP(),vitalToAdd.getHR(),vitalToAdd.getRR(),vitalToAdd.getLocation(),vitalToAdd.getPupils(),vitalToAdd.getEKG(),vitalToAdd.getLungSounds());
        vitalRepo.save(vital);
        return patientStorage.retrievedPatientById(Id);
    }
    @PatchMapping("/patients/{Id}/careGiver")
    public Patient addCareGiverToPatient(@RequestBody CareGiver careGiverToAdd, @PathVariable long Id){
        CareGiver careGiver = new CareGiver(careGiverToAdd.getRunId(),careGiverToAdd.getCareGiverId1(),careGiverToAdd.getCareGiverId2(),careGiverToAdd.getCareGiverId3(),careGiverToAdd.getDateAndTime());
        careGiverRepo.save(careGiver);
        return patientStorage.retrievedPatientById(Id);
    }
    @DeleteMapping("/patient/{Id}")
    public Iterable<Patient> deletePatientById(@PathVariable Long Id){
        patientStorage.deletePatientById(Id);
        return patientStorage.retrieveAllPatients();
    }
}
