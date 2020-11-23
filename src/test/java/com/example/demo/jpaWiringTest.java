package com.example.demo;

import com.example.demo.resource.CareGiver;
import com.example.demo.resource.Patient;
import com.example.demo.resource.Vitals;
import com.example.demo.storage.PatientRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class jpaWiringTest {
    @Autowired
    private PatientRepository patientRepo;
//    @Autowired
//    private TestEntityManager entityManager;
//    private void flushAndClear(){
//        entityManager.flush();
//        entityManager.clear();
//    }


    @Test
    public void patientRepoShouldSaveAndRetrieveVitalObjects(){
        Patient testPatient1 = new Patient(01234,25,"male",new Vitals(53,65,25,"1654164964","good","awesome","perfect"),"","","","","",new CareGiver(1654,65,85,35,"November 25 2020"));
        patientRepo.save(testPatient1);
//        flushAndClear();
        Patient retrievedPatient = patientRepo.findById(testPatient1.getId()).get();
        assertThat(retrievedPatient).isEqualTo(testPatient1);
    }
    


}


