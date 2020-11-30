const displaySinglePatient = function(patient) {
    console.log(patient);
    const patientModalElement =document.createElement("div");
    patientModalElement.classList.add("patient-modal");

    const div1Element = document.createElement("div");
    div1Element.classList.add("div1")
    const patientAgeElement = document.createElement("p");
    patientAgeElement.classList.add("patient-age")
    patientAgeElement.innerText = "Age: " + patient.age;
    const patientSexElement = document.createElement("p");
    patientSexElement.classList.add("patient-sex")
    patientSexElement.innerText = "Sex: " + patient.sex;
    const patientCCElement = document.createElement("p");
    patientCCElement.classList.add("patient-cc");
    patientCCElement.innerText = "Chief Complaint: " + patient.chiefComplaint;
    div1Element.appendChild(patientAgeElement);
    div1Element.appendChild(patientSexElement);
    div1Element.appendChild(patientCCElement);
    patientModalElement.appendChild(div1Element);


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
    patientModalElement.appendChild(div2Element);

    const patientVitalsElement = document.createElement("div");
    patientVitalsElement.classList.add("patient-vitals")
    const patientHeartRateElement =document.createElement("p");
    patientHeartRateElement.classList.add("patient-hr");
    patientHeartRateElement.innerText = "HR: " + patient.hr;
    const patientRRElement =document.createElement("p");
    patientRRElement.classList.add("patient-rr");
    patientRRElement.innerText = "RR: " + patient.rr;
    const patientBPElement =document.createElement("p");
    patientBPElement.classList.add("patient-bp");
    patientBPElement.innerText = "BP: " + patient.bp;
    const patientLOCElement =document.createElement("p");
    patientLOCElement.classList.add("patient-loc");
    patientLOCElement.innerText = "LOC: " + patient.loc;
    const patientPupilsElement =document.createElement("p");
    patientPupilsElement.classList.add("patient-pupils");
    patientPupilsElement.innerText = "Pupils: " + patient.pupils;
    const patientLungSoundsElement =document.createElement("p");
    patientLungSoundsElement.classList.add("patient-lung-sounds");
    patientLungSoundsElement.innerText = "Lung Sounds: " + patient.lungSounds;
    const patientEKGElement =document.createElement("p");
    patientEKGElement.classList.add("patient-ekg");
    patientEKGElement.innerText = "EKG: " + patient.ekg;
    patientVitalsElement.appendChild(patientHeartRateElement);
    patientVitalsElement.appendChild(patientRRElement);
    patientVitalsElement.appendChild(patientBPElement);
    patientVitalsElement.appendChild(patientLOCElement);
    patientVitalsElement.appendChild(patientPupilsElement);
    patientVitalsElement.appendChild(patientLungSoundsElement);
    patientVitalsElement.appendChild(patientEKGElement);
    patientModalElement.appendChild(patientVitalsElement);
    
    const patientWriteUpElement = document.createElement("div");
    patientWriteUpElement.classList.add("patient-writeup")
    const patientWriteUpContentElement = document.createElement("p");
    patientWriteUpContentElement.classList.add("patient-writeup-content");
    patientWriteUpContentElement.innerText = "Summary: " + patient.summary;
    patientWriteUpElement.appendChild(patientWriteUpContentElement);
    patientModalElement.appendChild(patientWriteUpElement);

    const patientPriorityElement = document.createElement("div");
    patientPriorityElement.classList.add("patient-priority")


   return patientModalElement;
}

const clearChildren = function (element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}
export{
    displaySinglePatient,
    clearChildren
}