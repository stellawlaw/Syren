package com.example.demo.storage;

import com.example.demo.resource.Vitals;
import org.springframework.data.repository.CrudRepository;

public interface VitalRepository extends CrudRepository<Vitals, Long> {
}
