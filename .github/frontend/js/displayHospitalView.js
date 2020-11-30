import {
    deletePatient
} from "./deletePatient.js"


const displayHospitalView = function (patients) {

    const patientListElement = document.createElement("div");
    patientListElement.classList.add("patient-intake-list");
    const patientCardElement = document.createElement("div");
    patientCardElement.classList.add("patient-card");

    patients.forEach(patient => {
        const patientAgeSexElement = document.createElement("div");
        patientAgeSexElement.classList.add("patient-age-sex");
        patientAgeSexElement.innerText = patient.age + "y/o" + patient.sex

        const etaElement = document.createElement("div");
        etaElement.classList.add("eta");
        etaElement.innerText = "ETA:" + "filler"

        const chiefComplaintElement = document.createElement("div");
        chiefComplaintElement.classList.add("chief-complaint");
        chiefComplaintElement.innerText = patient.chiefComplaint

        const priorityElement = document.createElement("div");
        priorityElement.classList.add("priority");
        priorityElement.innerHTML = `<img src="./imgs/priority-icon-green.png" alt="unavailable" class="priority">`



        let clearPtButtonElement = document.createElement("div");
        clearPtButtonElement.classList.add("clear-pt-button");
        const ptButton = document.createElement("button");
        ptButton.innerText = "Clear PT";
        clearPtButtonElement.innerText = `${patient.patientCardElement}`
        ptButton.addEventListener('click', () => deletePatient(patient));

        patientListElement.appendChild(patientCardElement);
        patientCardElement.appendChild(patientAgeSexElement);
        patientCardElement.appendChild(etaElement);
        patientCardElement.appendChild(chiefComplaintElement);
        patientCardElement.appendChild(priorityElement);
        clearPtButtonElement.appendChild(ptButton);
        patientCardElement.appendChild(clearPtButtonElement);
        
    });


}
export {
    displayHospitalView
}