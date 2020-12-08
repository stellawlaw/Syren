package com.example.demo.storage;

import com.example.demo.resource.Hospital;
import com.example.demo.resource.Patient;
import org.springframework.stereotype.Service;

@Service
public class PatientStorage {
    private PatientRepository patientRepo;
    private HospitalRepository hospitalRepo;

    public PatientStorage(PatientRepository patientRepo,HospitalRepository hospitalRepo) {
        this.patientRepo = patientRepo;
        this.hospitalRepo = hospitalRepo;
    }
    public Patient retrievedPatientById(Long id){
        return patientRepo.findById(id).get();
    }
    public Iterable<Patient> retrieveAllPatients(){
        return patientRepo.findAll();
    }
    public void savePatient(Patient patientToSave){
        patientRepo.save(patientToSave);
    }
    public void deletePatientById(Long id){
        patientRepo.deleteById(id);
    }
    public Iterable<Patient> retrievePatientsFromHospitalById(Long hospitalId){
        return patientRepo.findByHospitalId(hospitalId);
    }

}
