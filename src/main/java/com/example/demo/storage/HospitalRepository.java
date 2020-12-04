package com.example.demo.storage;

import com.example.demo.resource.Hospital;
import org.springframework.data.repository.CrudRepository;

public interface HospitalRepository extends CrudRepository  <Hospital, Long>{

}
