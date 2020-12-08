package com.example.demo;

import com.example.demo.resource.*;
import com.example.demo.storage.CareGiverRepository;
import com.example.demo.storage.HospitalRepository;
import com.example.demo.storage.PatientRepository;
import com.example.demo.storage.VitalRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class jpaWiringTest {
    @Autowired
    private PatientRepository patientRepo;
    @Autowired
    private VitalRepository vitalRepo;
    @Autowired
    private CareGiverRepository careGiverRepo;
    @Autowired
    private HospitalRepository hospitalrepo;
    @Autowired
    private TestEntityManager entityManager;
    private void flushAndClear(){
        entityManager.flush();
        entityManager.clear();
    }


    @Test
    public void patientRepoShouldSaveAndRetrieveVitalObjects(){

        Hospital hospital1 = new Hospital("riverside", new Coordinates(12.1, 12.1));
        hospitalrepo.save(hospital1);
        Vitals vitals1 = new Vitals("53/120", 65, 25, "1654164964", "good", "awesome", "perfect");
        vitalRepo.save(vitals1);
        CareGiver careGiver1 = new CareGiver(1654, 65, 85, 35, "November 25 2020");
        careGiverRepo.save(careGiver1);
        Patient testPatient1 = new Patient(01234,25,"male", vitals1,"","","","","","","", careGiver1, hospital1);
        patientRepo.save(testPatient1);
        flushAndClear();
        Patient retrievedPatient = patientRepo.findById(testPatient1.getId()).get();
        assertThat(retrievedPatient).isEqualTo(testPatient1);
    }

    @Test
    public void patientHasOneVitalAndOneCareGiver(){
        Hospital hospital1 = new Hospital("riverside", new Coordinates(12.1, 12.1));
        hospitalrepo.save(hospital1);
        Vitals testVital = new Vitals("53/120",65,25,"1654164964","good","awesome","perfect");
        vitalRepo.save(testVital);
        CareGiver testCareGiver = new CareGiver(1654, 65, 85, 35, "November 25 2020");
        careGiverRepo.save(testCareGiver);
        Patient testPatient1 = new Patient(01234,25,"male",testVital,"","","","","","","", testCareGiver,hospital1 );
        patientRepo.save(testPatient1);
        flushAndClear();
        Patient retrievedPatient1 = patientRepo.findById(testPatient1.getId()).get();
        assertThat(retrievedPatient1.getVitals()).isEqualTo(testVital);
        Patient retrievedpatient2 = patientRepo.findById(testPatient1.getId()).get();
        assertThat(retrievedpatient2.getCareGiver()).isEqualTo(testCareGiver);
    }


}


