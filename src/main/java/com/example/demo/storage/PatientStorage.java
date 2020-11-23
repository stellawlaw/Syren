package com.example.demo.storage;

import com.example.demo.resource.Patient;
import org.springframework.stereotype.Service;

@Service
public class PatientStorage {
    private PatientRepository patientRepo;

    public PatientStorage(PatientRepository patientRepo) {
        this.patientRepo = patientRepo;
    }
    public Patient retrievedPatientById(Long Id){
        return patientRepo.findById(Id).get();
    }
    public Iterable<Patient> retrieveAllPatients(){
        return patientRepo.findAll();
    }
    public void savePatient(Patient patientToSave){
        patientRepo.save(patientToSave);
    }
    public void deletePatientById(Long Id){
        patientRepo.deleteById(Id);
    }

}
