import{
    displayHospitalView
} from "./displayHospitalView.js";

import{
    clearChildren
}from "./displaySinglePatient.js";

const deletePatient = function(patient){
    const patientIntakeList = document.querySelector(".patient-intake-list");
    
    clearChildren(patientIntakeList);
    
    fetch(`http://localhost:8080/api/patients/${patient.id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(patient => displayHospitalView(patient))
    .then(patientsElement => patientIntakeList.appendChild(patientsElement));
    
}

export{
    deletePatient
}