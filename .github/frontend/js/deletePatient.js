import{displayHospitalView
}from "./displayHospitalView.js";


const deletePatient = function(patient){
    const patientIntakeList = document.querySelector(".patient-intake-list");

    fetch(`http://localhost:8080/api/patients/${patient.id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(patients => displayHospitalView(patients))
    .then(patientsElement => patientIntakeList.appendChild(patientsElement));

}

export{
    deletePatient
}