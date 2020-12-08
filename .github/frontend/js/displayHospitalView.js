import {
    deletePatient
} from "./deletePatient.js"

import {
    clearChildren,
    displaySinglePatient
} from "./displaySinglePatient.js"

import {
    createHeader
  } from "./header.js"
  
import{
    editPatientPriority
}from "./displaySinglePatient.js"

let hospitalToRender;
const displayHospitalView = function (patients) {
    const patientListElement = document.createElement("div");
    patientListElement.classList.add("patient-intake-list");
    const container = document.querySelector('.container');

    patients.forEach(patient => {

        let patientCardElement = document.createElement("div");
        patientCardElement.classList.add("patient-card");

        let patientModal = displaySinglePatient(patient);
        patientListElement.appendChild(patientModal);
        patientCardElement.addEventListener('click', () => {
            patientModal.style.display = "block";
        });

        function closeModal() {
            clearChildren(container)
            container.prepend(createHeader(hospitalToRender));
            fetch(`http://localhost:8080/api/patients/hospital/${hospitalToRender.id}`)
                .then(response => response.json())
                .then(patients => displayHospitalView(patients))
                .then(patientsElement => container.appendChild(patientsElement))
                .catch(error => console.log(error));
            

            patientModal.style.display = "none";
        }
        patientModal.addEventListener('click', closeModal);

        let patientAgeSexElement = document.createElement("div");
        patientAgeSexElement.classList.add("patient-age-sex");
        patientAgeSexElement.innerHTML = `<strong>Patient: </strong> ${patient.age}  y/o  ${patient.sex}`

        let etaElement = document.createElement("div");
        etaElement.classList.add("eta");
        etaElement.innerText = "ETA: " + "2:00"

        let chiefComplaintElement = document.createElement("div");
        chiefComplaintElement.classList.add("chief-complaint");
        chiefComplaintElement.innerHTML = `<strong>Chief Complaint: </strong> ${patient.chiefComplaint}`
  

        let priorityElement = document.createElement("div");
        priorityElement.classList.add("priority");
        priorityElement.innerHTML = `<img src="./imgs/priority-icon-${patient.levelOfEmergency}.png" alt="unavailable" class="priority">`

        const clearPtButtonElement = document.createElement("div");
        clearPtButtonElement.classList.add("clear-pt-button");
        const ptButton = document.createElement("button");
        ptButton.innerText = "Clear PT";
        ptButton.addEventListener('click', () => deletePatient(patient));

        patientCardElement.appendChild(patientAgeSexElement);
        patientCardElement.appendChild(etaElement);
        patientCardElement.appendChild(chiefComplaintElement);
        patientCardElement.appendChild(priorityElement);
        clearPtButtonElement.appendChild(ptButton);
        patientCardElement.appendChild(clearPtButtonElement);
        patientListElement.appendChild(patientCardElement);

    });
    return patientListElement;

}
const createHospitalView = function (hospital) {
    const container = document.querySelector('.container');
    hospitalToRender = hospital;
  
    container.prepend(createHeader(hospital));
    fetch(`http://localhost:8080/api/patients/hospital/${hospital.id}`)
      .then(response => response.json())
      .then(patients => displayHospitalView(patients))
      .then(patientsElement => container.appendChild(patientsElement))
      .catch(error => console.log(error));
  }

export {
    displayHospitalView,
    createHospitalView
}