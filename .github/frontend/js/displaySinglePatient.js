const displaySinglePatient = function (patient) {
    console.log(patient);
    const patientModalElement = document.createElement("div");
    patientModalElement.classList.add("patient-modal");
    const patientModalInfoElement = document.createElement("div");
    patientModalInfoElement.classList.add("patient-modal-info");
    patientModalElement.appendChild(patientModalInfoElement);


    const div1Element = document.createElement("div");
    div1Element.classList.add("div1")
    const patientTitle = document.createElement("h1");
    patientTitle.classList.add("patient-title")
    patientTitle.innerText = "Patient Details"
    const patientId = document.createElement('p');
    patientId.classList.add("patient-id");
    patientId.innerText = "Patient Id: " + patient.patientId;
    const patientAgeElement = document.createElement("p");
    patientAgeElement.classList.add("patient-age")
    patientAgeElement.innerText = "Age: " + patient.age;
    const patientSexElement = document.createElement("p");
    patientSexElement.classList.add("patient-sex")
    patientSexElement.innerText = "Sex: " + patient.sex;
    const patientCCElement = document.createElement("p");
    patientCCElement.classList.add("patient-cc");
    patientCCElement.innerText = "Chief Complaint: " + patient.chiefComplaint;
    div1Element.appendChild(patientTitle);
    div1Element.appendChild(patientId);
    div1Element.appendChild(patientAgeElement);
    div1Element.appendChild(patientSexElement);
    div1Element.appendChild(patientCCElement);
    patientModalInfoElement.appendChild(div1Element);


    const div2Element = document.createElement("div");
    div2Element.classList.add("div2")
    const patientMedicalHistoryElement = document.createElement("p");
    patientMedicalHistoryElement.classList.add("patient-medical-history")
    patientMedicalHistoryElement.innerText = "Medical History: " + patient.medicalHistory;
    const patientAllergiesElement = document.createElement("p");
    patientAllergiesElement.classList.add("patient-allergies");
    patientAllergiesElement.innerText = "Allergies: " + patient.allergies;
    const patientMedicationsElement = document.createElement("p");
    patientMedicationsElement.classList.add("patient-medications");
    patientMedicationsElement.innerText = "Medications: " + patient.medication;
    div2Element.appendChild(patientMedicalHistoryElement);
    div2Element.appendChild(patientAllergiesElement);
    div2Element.appendChild(patientMedicationsElement);
    patientModalInfoElement.appendChild(div2Element);

    const patientVitalsElement = document.createElement("div");
    patientVitalsElement.classList.add("patient-vitals")
    const patientHeartRateElement = document.createElement("p");
    patientHeartRateElement.classList.add("patient-hr");
    patientHeartRateElement.innerText = "HR: " + patient.vitals.hr;
    const patientRRElement = document.createElement("p");
    patientRRElement.classList.add("patient-rr");
    patientRRElement.innerText = "RR: " + patient.vitals.rr;
    const patientBPElement = document.createElement("p");
    patientBPElement.classList.add("patient-bp");
    patientBPElement.innerText = "BP: " + patient.vitals.bp;
    const patientLOCElement = document.createElement("p");
    patientLOCElement.classList.add("patient-loc");
    patientLOCElement.innerText = "LOC: " + patient.vitals.loc;
    const patientPupilsElement = document.createElement("p");
    patientPupilsElement.classList.add("patient-pupils");
    patientPupilsElement.innerText = "Pupils: " + patient.vitals.pupils;
    const patientLungSoundsElement = document.createElement("p");
    patientLungSoundsElement.classList.add("patient-lung-sounds");
    patientLungSoundsElement.innerText = "Lung Sounds: " + patient.vitals.lungSounds;
    const patientEKGElement = document.createElement("p");
    patientEKGElement.classList.add("patient-ekg");
    patientEKGElement.innerText = "EKG: " + patient.vitals.ekg;
    patientVitalsElement.appendChild(patientHeartRateElement);
    patientVitalsElement.appendChild(patientRRElement);
    patientVitalsElement.appendChild(patientBPElement);
    patientVitalsElement.appendChild(patientLOCElement);
    patientVitalsElement.appendChild(patientPupilsElement);
    patientVitalsElement.appendChild(patientLungSoundsElement);
    patientVitalsElement.appendChild(patientEKGElement);
    patientModalInfoElement.appendChild(patientVitalsElement);

    const patientWriteUpElement = document.createElement("div");
    patientWriteUpElement.classList.add("patient-writeup")
    const patientWriteUpContentElement = document.createElement("p");
    patientWriteUpContentElement.classList.add("patient-writeup-content");
    patientWriteUpContentElement.innerText = "Summary: " + patient.summary;
    patientWriteUpElement.appendChild(patientWriteUpContentElement);
    patientModalInfoElement.appendChild(patientWriteUpElement);

    const patientPriorityElement = document.createElement("div");
    patientPriorityElement.classList.add("patient-priority")

    const patientPriorityElementGreen = document.createElement("img");
    patientPriorityElementGreen.classList.add("priority-green")
    patientPriorityElementGreen.setAttribute("src", "./imgs/priority-icon-green.png")
    patientPriorityElementGreen.setAttribute("alt", "unavailable")
    patientPriorityElement.appendChild(patientPriorityElementGreen);
    patientPriorityElementGreen.addEventListener('click',(clickEvent) => {
        clickEvent.stopPropagation()
        editPatientPriority(patient, 'green')
        patientPriorityElementGreen.style.opacity = 1;
        patientPriorityElementGreen.style.border = 'solid';
        patientPriorityElementGreen.style.borderRadius = 7 + "px";
        patientPriorityElementGreen.style.borderWidth = 6 + "px";
        patientPriorityElementGreen.style.borderColor = "#049c04"

        patientPriorityElementYellow.style.opacity = .5;
        patientPriorityElementYellow.style.border = 'solid';
        patientPriorityElementYellow.style.borderRadius = 5 + "px";
        patientPriorityElementYellow.style.borderWidth = 4 + "px";
        patientPriorityElementYellow.style.borderColor = "#f0f7ee"
        patientPriorityElementYellow.style.boxShadow = "none"

        patientPriorityElementRed.style.opacity = .5;
        patientPriorityElementRed.style.border = 'solid';
        patientPriorityElementRed.style.borderRadius = 5 + "px";
        patientPriorityElementRed.style.borderWidth = 4 + "px";
        patientPriorityElementRed.style.borderColor = "#f0f7ee"
        patientPriorityElementRed.style.boxShadow = "none"

    });


    const patientPriorityElementYellow = document.createElement("img");
    patientPriorityElementYellow.classList.add("priority-yellow")
    patientPriorityElementYellow.setAttribute("src", "./imgs/priority-icon-yellow.png")
    patientPriorityElementYellow.setAttribute("alt", "unavailable")
    patientPriorityElement.appendChild(patientPriorityElementYellow);
    patientPriorityElementYellow.addEventListener('click', (clickEvent)=>{ 
        clickEvent.stopPropagation()
        editPatientPriority(patient, 'yellow')
        patientPriorityElementYellow.style.opacity = 1;
        patientPriorityElementYellow.style.border = 'solid';
        patientPriorityElementYellow.style.borderRadius = 7 + "px";
        patientPriorityElementYellow.style.borderWidth = 6 + "px";
        patientPriorityElementYellow.style.borderColor = "#fcf4a3"

        patientPriorityElementGreen.style.opacity = .5;
        patientPriorityElementGreen.style.border = 'solid';
        patientPriorityElementGreen.style.borderRadius = 5 + "px";
        patientPriorityElementGreen.style.borderWidth = 4 + "px";
        patientPriorityElementGreen.style.borderColor = "#f0f7ee"
        patientPriorityElementGreen.style.boxShadow = "none"

        patientPriorityElementRed.style.opacity = .5;
        patientPriorityElementRed.style.border = 'solid';
        patientPriorityElementRed.style.borderRadius = 5 + "px";
        patientPriorityElementRed.style.borderWidth = 4 + "px";
        patientPriorityElementRed.style.borderColor = "#f0f7ee"
        patientPriorityElementRed.style.boxShadow = "none"
    });
      
    

    const patientPriorityElementRed = document.createElement("img");
    patientPriorityElementRed.classList.add("priority-red")
    patientPriorityElementRed.setAttribute("src", "./imgs/priority-icon-red.png")
    patientPriorityElementRed.setAttribute("alt", "unavailable")
    patientPriorityElement.appendChild(patientPriorityElementRed);
    patientPriorityElementRed.addEventListener('click', (clickEvent)=>{
        clickEvent.stopPropagation()
        editPatientPriority(patient, 'red')
        patientPriorityElementRed.style.opacity = 1;
        patientPriorityElementRed.style.border = 'solid';
        patientPriorityElementRed.style.borderRadius = 7 + "px";
        patientPriorityElementRed.style.borderWidth = 6 + "px";
        patientPriorityElementRed.style.borderColor = "#bc544b"

        patientPriorityElementGreen.style.opacity = .5;
        patientPriorityElementGreen.style.border = 'solid';
        patientPriorityElementGreen.style.borderRadius = 5 + "px";
        patientPriorityElementGreen.style.borderWidth = 4 + "px";
        patientPriorityElementGreen.style.borderColor = "#f0f7ee"
        patientPriorityElementGreen.style.boxShadow = "none"

        patientPriorityElementYellow.style.opacity = .5;
        patientPriorityElementYellow.style.border = 'solid';
        patientPriorityElementYellow.style.borderRadius = 5 + "px";
        patientPriorityElementYellow.style.borderWidth = 4 + "px";
        patientPriorityElementYellow.style.borderColor = "#f0f7ee"
        patientPriorityElementYellow.style.boxShadow = "none"
    });

    
    if (patient.levelOfEmergency == 'green') {

        patientPriorityElementGreen.style.opacity = 1;
        patientPriorityElementGreen.style.border = 'solid';
        patientPriorityElementGreen.style.borderRadius = 7 + "px";
        patientPriorityElementGreen.style.borderWidth = 6 + "px";
        patientPriorityElementGreen.style.borderColor = "#049c04"

    }

    else if (patient.levelOfEmergency == 'yellow') {
        patientPriorityElementYellow.style.opacity = 1;
        patientPriorityElementYellow.style.border = 'solid';
        patientPriorityElementYellow.style.borderRadius = 7 + "px";
        patientPriorityElementYellow.style.borderWidth = 6 + "px";
        patientPriorityElementYellow.style.borderColor = "#fcf4a3"

    }

    else {
        patientPriorityElementRed.style.opacity = 1
        patientPriorityElementRed.style.border = 'solid';
        patientPriorityElementRed.style.borderRadius = 7 + "px";
        patientPriorityElementRed.style.borderWidth = 6 + "px";
        patientPriorityElementRed.style.borderColor = "#bc544b"
     
    }

    patientModalInfoElement.appendChild(patientPriorityElement);

    return patientModalElement;
}
const editPatientPriority = function(patient, color){
    
    const patientPriorityElement = document.querySelector(".patient-priority");
    
    fetch(`http://localhost:8080/api/patients/${patient.id}/levelOfEmergency/${color}`, {
        method: 'PATCH'
    })
    .then(response => response.json())
    .then(patient => displaySinglePatient(patient))
    .then(patientsElement =>{
        const patientListElement = document.querySelector(".patient-intake-list")
        patientListElement.appendChild(patientsElement);
    });

}
const clearChildren = function (element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

export {
    displaySinglePatient,
    clearChildren, 
    editPatientPriority
}