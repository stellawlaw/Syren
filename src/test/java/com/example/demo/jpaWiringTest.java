package com.example.demo;

import com.example.demo.resource.CareGiver;
import com.example.demo.resource.Patient;
import com.example.demo.resource.Vitals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
@DataJpaTest
public class jpaWiringTest {

    @Test
    public void patientRepoShouldSaveAndRetrieveVitalObjects(){
        Patient testPatient1 = new Patient(01234,25,"male",new Vitals(53,65,25,"1654164964","good","awesome","perfect"),"","","","","",new CareGiver(1654,65,85,35,"novemeber 25 2020")){

        }
    }

}


