package com.example.demo.storage;

import com.example.demo.resource.Patient;
import org.springframework.data.repository.CrudRepository;

public interface PatientRepository extends CrudRepository <Patient, Long>{
    Iterable<Patient> findByHospitalId(Long hospitalId);
}
