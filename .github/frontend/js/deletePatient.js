import{
    displayHospitalView
} from "./displayHospitalView.js";


const deletePatient = function(patient){
    const patientIntakeList = document.querySelector(".container");

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