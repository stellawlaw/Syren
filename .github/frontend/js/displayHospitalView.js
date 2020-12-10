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


let time = 5000
let hospitalToRender;
const patientListElement = document.createElement("div");
patientListElement.classList.add("patient-intake-list");
const container = document.querySelector('.container');
const displayHospitalView = function (patients) {
    
    const directionService = new google.maps.DirectionsService();
    const hospitalLocation = new google.maps.LatLng(hospitalToRender.coordinates.latitude, hospitalToRender.coordinates.longitude);
    // const refresh = setInterval(()=>reloadPatientList(patients,patientListElement), time);
    stopRefresh();
    startRefresh(patients);
    
    patients.forEach(patient => {
        let etaElement = document.createElement("div");
        etaElement.classList.add("eta");
        etaElement.innerText = "ETA: " ;

        let patientLocation = patient.location.split(',');
        let patientLat = parseFloat(patientLocation[0]);
        let patientLon = parseFloat(patientLocation[1]);
        let patientOrigin = new google.maps.LatLng(patientLat, patientLon);
        let patientEta;

        directionService.route(
            {
                origin: patientOrigin,
                destination: hospitalLocation,
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (response,status) => {
                if(status === 'OK'){
                    patientEta = response.routes[0].legs[0].duration.text;
                    etaElement.innerText = "ETA: " + patientEta;
                }else{
                    window.alert('direction request failed due to ' + status);
    
                }
            }
        );

        let patientCardElement = document.createElement("div");
        patientCardElement.classList.add("patient-card");

        let patientModal = displaySinglePatient(patient);
        patientListElement.appendChild(patientModal);
        patientCardElement.addEventListener('click', () => {
            stopRefresh();
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
let refresh ;
const startRefresh = function(patients){
    if(refresh == undefined){
        refresh = setInterval(()=>reloadPatientList(patients), time);
    }
}
const stopRefresh = function(){
    clearInterval(refresh);
    if(refresh != undefined){
        refresh = undefined;
    }
}
let reloadPatientList = function(patients){
        console.log(patients)
        clearChildren(patientListElement);
        fetch(`http://localhost:8080/api/patients/hospital/${hospitalToRender.id}`)
            .then(response => response.json())
            .then(patients => displayHospitalView(patients))
            .then(patientsElement => container.appendChild(patientsElement))
            .catch(error => console.log(error));
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