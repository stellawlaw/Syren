package com.example.demo.storage;

import com.example.demo.resource.Hospital;
import com.example.demo.resource.Patient;
import org.springframework.stereotype.Service;

@Service
public class HospitalStorage {

    private HospitalRepository hospitalRepo;

    public HospitalStorage(HospitalRepository hospitalRepo) {
        this.hospitalRepo = hospitalRepo;
    }

    public Hospital retrievePatientByHospitalId(Long id) {
        return hospitalRepo.findById(id).get();
    }
}
