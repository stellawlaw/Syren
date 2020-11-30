import {
    deletePatient
} from "./deletePatient.js"


const displayHospitalView = function (patients) {
    const containerElement = document.createElement("div");
    containerElement.classList.add("container");
    const patientListElement = document.createElement("div");
    patientListElement.classList.add("patient-intake-list");
    containerElement.appendChild(patientListElement);

    
    patients.forEach(patient => {
        let patientCardElement = document.createElement("div");
        patientCardElement.classList.add("patient-card");

        let patientAgeSexElement = document.createElement("div");
        patientAgeSexElement.classList.add("patient-age-sex");
        patientAgeSexElement.innerText = patient.age + " y/o " + patient.sex

        let etaElement = document.createElement("div");
        etaElement.classList.add("eta");
        etaElement.innerText = "ETA:" + "filler"

        let chiefComplaintElement = document.createElement("div");
        chiefComplaintElement.classList.add("chief-complaint");
        chiefComplaintElement.innerText = patient.chiefComplaint

        let priorityElement = document.createElement("div");
        priorityElement.classList.add("priority");
        priorityElement.innerHTML = `<img src="./imgs/priority-icon-green.png" alt="unavailable" class="priority">`



        let clearPtButtonElement = document.createElement("div");
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
export {
    displayHospitalView
}