import{
    createHeader
}from "./createHeader.js"

const clearChildren = function (element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

const createRadioButtons = function () {
    const radioButtonDiv = document.createElement("div");
    radioButtonDiv.classList.add("radio-buttons");

    const maleRadio = document.createElement("input");
    maleRadio.setAttribute('type', 'radio');
    maleRadio.id = "male";
    maleRadio.value = "male";
    const maleRadioLabel = document.createElement("label");
    maleRadioLabel.htmlFor = "male";
    maleRadioLabel.innerText = "Male";
    const femaleRadio = document.createElement("input");
    femaleRadio.setAttribute('type', 'radio');
    femaleRadio.id = "female";
    femaleRadio.value = "female";
    const femaleRadioLabel = document.createElement("label");
    femaleRadioLabel.htmlFor = "female";
    femaleRadioLabel.innerText = "Female";
    const otherRadio = document.createElement("input");
    otherRadio.setAttribute('type', 'radio');
    otherRadio.id = "other";
    otherRadio.value = "other";
    const otherRadioLabel = document.createElement("label");
    otherRadioLabel.htmlFor = "other";
    otherRadioLabel.innerText = "Other";

    const br1 = document.createElement("br");
    const br2 = document.createElement("br");

    radioButtonDiv.appendChild(maleRadio);
    radioButtonDiv.appendChild(maleRadioLabel);
    radioButtonDiv.appendChild(br1);
    radioButtonDiv.appendChild(femaleRadio);
    radioButtonDiv.appendChild(femaleRadioLabel);
    radioButtonDiv.appendChild(br2);
    radioButtonDiv.appendChild(otherRadio);
    radioButtonDiv.appendChild(otherRadioLabel);

    return radioButtonDiv;
}

const createSelectBoxes = function () {
    const selectBoxesDiv = document.createElement("div");
    selectBoxesDiv.classList.add("select-boxes");

    const locLabel = document.createElement("label");
    locLabel.htmlFor = "loc";
    locLabel.innerText = "LOC:";
    const locSelect = document.createElement("select");
    locSelect.name = "loc";
    locSelect.id = "loc";

    const locAlert = document.createElement("option");
    locAlert.value = "alert";
    locAlert.innerText = "Alert";
    const locLethargic = document.createElement("option");
    locLethargic.value = "lethargic";
    locLethargic.innerText = "Lethargic";
    const locUnresponsive = document.createElement("option");
    locUnresponsive.value = "unresponsive";
    locUnresponsive.innerText = "Unresponsive"
    locSelect.appendChild(locAlert);
    locSelect.appendChild(locLethargic);
    locSelect.appendChild(locUnresponsive);

    const pupilsLabel = document.createElement("label");
    pupilsLabel.htmlFor = "pupils";
    pupilsLabel.innerText = "Pupils:";
    const pupilsSelect = document.createElement("select");
    pupilsSelect.name = "pupils";
    pupilsSelect.id = "pupils";

    const pupilsResponsive = document.createElement("option");
    pupilsResponsive.value = "responsive";
    pupilsResponsive.innerText = "Responsive";
    const pupilsSlow = document.createElement("option");
    pupilsSlow.value = "slow";
    pupilsSlow.innerText = "slow";
    const pupilsUnresponsive = document.createElement("option");
    pupilsUnresponsive.value = "unresponsive";
    pupilsUnresponsive.innerText = "unresponsive";
    const pupilsDilated = document.createElement("option");
    pupilsDilated.value = "dilated";
    pupilsDilated.innerText = "dilated";
    pupilsSelect.appendChild(pupilsResponsive);
    pupilsSelect.appendChild(pupilsSlow);
    pupilsSelect.appendChild(pupilsUnresponsive);
    pupilsSelect.appendChild(pupilsDilated);

    const lungSoundsLabel = document.createElement("label");
    lungSoundsLabel.htmlFor = "lung-sounds";
    lungSoundsLabel.innerText = "Lung Sounds:";
    const lungSoundsSelect = document.createElement("select");
    lungSoundsSelect.name = "lung-sounds";
    lungSoundsSelect.id = "lung-sounds";

    const lungSoundsClear = document.createElement("option");
    lungSoundsClear.value = "clear";
    lungSoundsClear.innerText = "Clear";
    const lungSoundsRhonchi = document.createElement("option");
    lungSoundsRhonchi.value = "rhonchi";
    lungSoundsRhonchi.innerText = "rhonchi";
    const lungSoundsRales = document.createElement("option");
    lungSoundsRales.value = "rales";
    lungSoundsRales.innerText = "rales";
    const lungSoundsStridor = document.createElement("option");
    lungSoundsStridor.value = "stridor";
    lungSoundsStridor.innerText = "stridor";
    const lungSoundsWheezing = document.createElement("option");
    lungSoundsWheezing.value = "wheezing";
    lungSoundsWheezing.innerText = "wheezing";
    lungSoundsSelect.appendChild(lungSoundsClear);
    lungSoundsSelect.appendChild(lungSoundsRhonchi);
    lungSoundsSelect.appendChild(lungSoundsRales);
    lungSoundsSelect.appendChild(lungSoundsStridor);
    lungSoundsSelect.appendChild(lungSoundsWheezing);

    selectBoxesDiv.appendChild(locLabel);
    selectBoxesDiv.appendChild(locSelect);
    selectBoxesDiv.appendChild(pupilsLabel);
    selectBoxesDiv.appendChild(pupilsSelect);
    selectBoxesDiv.appendChild(lungSoundsLabel);
    selectBoxesDiv.appendChild(lungSoundsSelect);

    return selectBoxesDiv;
}

const createHospitalSelect = function () {
    const hospitalSelectDiv = document.createElement("div");
    hospitalSelectDiv.classList.add("hospitals");

    const hospitalSelect = document.createElement("select");
    hospitalSelect.name = "hospitals";
    hospitalSelect.id = "hospitals";

    const doctorsWest = document.createElement("option");
    doctorsWest.value = "doctors";
    doctorsWest.innerText = "Doctors West";
    const dmh = document.createElement("option");
    dmh.value = "dmh";
    dmh.innerText = "Dublin Methodist Hospital";
    const gmc = document.createElement("option");
    gmc.value = "gmc";
    gmc.innerText = "Grant Medical Center";
    const mce = document.createElement("option");
    mce.value = "mce";
    mce.innerText = "Mt. Carmel East";
    const mcw = document.createElement("option");
    mcw.value = "mcw";
    mcw.innerText = "Mt. Carmel West";
    const nch = document.createElement("option");
    nch.value = "nch";
    nch.innerText = "Nationwide Children's Hospital";
    const nchlc = document.createElement("option");
    nchlc.value = "nchlc";
    nchlc.innerText = "NCH Lewis Center";
    const osu = document.createElement("option");
    osu.value = "osu";
    osu.innerText = "Ohio State University";
    const osue = document.createElement("option");
    osue.value = "osue";
    osue.innerText = "Ohio State University East";
    const rmh = document.createElement("option");
    rmh.value = "rmh";
    rmh.innerText = "Riverside Methodist Hospital";
    const sah = document.createElement("option");
    sah.value = "sah";
    sah.innerText = "St. Ann's Hospital";
    hospitalSelect.appendChild(doctorsWest);
    hospitalSelect.appendChild(dmh);
    hospitalSelect.appendChild(gmc);
    hospitalSelect.appendChild(mce);
    hospitalSelect.appendChild(mcw);
    hospitalSelect.appendChild(nch);
    hospitalSelect.appendChild(nchlc);
    hospitalSelect.appendChild(osu);
    hospitalSelect.appendChild(osue);
    hospitalSelect.appendChild(rmh);
    hospitalSelect.appendChild(sah);

    hospitalSelectDiv.appendChild(hospitalSelect);

    return hospitalSelectDiv;
}

const whichGender = function () {
    if (document.querySelector("#male").checked = true) 
    {
        return "male";
    } 
    else if(document.querySelector("#female").checked = true)
    {
        return "female";
    }
    else
    {
        return "other";
    }
}

const displayPatientForm = function () {
    const body = document.querySelector("body");
    clearChildren(body);
    body.appendChild(createHeader());

    const patientFormDiv = document.createElement("div");
    patientFormDiv.classList.add("pt-submit-form");
    const patientForm = document.createElement("form");
    patientForm.setAttribute('action', 'post');
    patientForm.classList.add("submit-form");

    patientForm.appendChild(createRadioButtons());
    patientForm.appendChild(createSelectBoxes());

    const patientAgeInput = document.createElement("input");
    patientAgeInput.setAttribute("type", "number");
    patientAgeInput.id = "pt-age";
    patientAgeInput.placeholder = "Patient Age";
    const chiefComplaintInput = document.createElement("input");
    chiefComplaintInput.setAttribute("type", "text");
    chiefComplaintInput.id = "chief-complaint";
    chiefComplaintInput.placeholder = "Chief Complaint";
    const medicalHistoryInput = document.createElement("input");
    medicalHistoryInput.setAttribute("type", "text");
    medicalHistoryInput.id = "medical-history";
    medicalHistoryInput.placeholder = "Medical History";
    const allergiesInput = document.createElement("input");
    allergiesInput.setAttribute("type", "text");
    allergiesInput.id = "allergies";
    allergiesInput.placeholder = "Allergies";
    const medicationsInput = document.createElement("input");
    medicationsInput.setAttribute("type", "text");
    medicationsInput.id = "medications";
    medicationsInput.placeholder = "Medications";
    const heartRateInput = document.createElement("input");
    heartRateInput.setAttribute("type", "number");
    heartRateInput.id = "heart-rate";
    heartRateInput.placeholder = "Heart Rate";
    const respiratoryRateInput = document.createElement("input");
    respiratoryRateInput.setAttribute("type", "number");
    respiratoryRateInput.id = "respiratory-rate";
    respiratoryRateInput.placeholder = "Respiratory Rate";
    const bloodPressureInput = document.createElement("input");
    bloodPressureInput.setAttribute("type", "text");
    bloodPressureInput.id = "blood-pressure";
    bloodPressureInput.placeholder = "Blood Pressure";
    const ekgInput = document.createElement("input");
    ekgInput.setAttribute("type", "text");
    ekgInput.id = "ekg";
    ekgInput.placeholder = "EKG";
    const summaryInput = document.createElement("input");
    summaryInput.setAttribute("type", "text");
    summaryInput.id = "write-up";
    summaryInput.placeholder = "Write Up";
    patientForm.appendChild(patientAgeInput);
    patientForm.appendChild(chiefComplaintInput);
    patientForm.appendChild(medicalHistoryInput);
    patientForm.appendChild(allergiesInput);
    patientForm.appendChild(medicationsInput);
    patientForm.appendChild(heartRateInput);
    patientForm.appendChild(respiratoryRateInput);
    patientForm.appendChild(bloodPressureInput);
    patientForm.appendChild(ekgInput);
    patientForm.appendChild(summaryInput);

    const hospitalLabel = document.createElement("label");
    hospitalLabel.htmlFor = "hospitals";
    hospitalLabel.innerText = "Select a Hospital";
    hospitalLabel.classList.add("hospital-label");
    patientForm.appendChild(hospitalLabel);
    patientForm.appendChild(createHospitalSelect());

    const submitButton = document.createElement("button");
    submitButton.setAttribute('type', 'submit')
    submitButton.classList.add("submit-button");
    submitButton.innerText = "Submit";

    patientForm.appendChild(submitButton);
    patientFormDiv.appendChild(patientForm);
    body.appendChild(patientFormDiv);

    let gender = whichGender();

    const storePosition = function (position) {
        console.log(""+position.coords.latitude+", "+position.coords.longitude);
        return ""+position.coords.latitude+", "+position.coords.longitude;
    }

    submitButton.addEventListener('click', (clickEvent) =>{
        clickEvent.preventDefault();
        let location = navigator.geolocation.getCurrentPosition(storePosition);
        const patient = {
            "age":patientAgeInput.value,
            "sex":gender,
            "location":location,
            "vitals":{
                "bp": bloodPressureInput.value,
                "hr": heartRateInput.value,
                "loc": document.querySelector("#loc").value,
                "rr": respiratoryRateInput.value,
                "pupils": document.querySelector("#pupils").value,
                "ekg": ekgInput.value,
                "lungSounds": document.querySelector("#lung-sounds").value
              },
            "medicalHistory":medicalHistoryInput.value,
            "allergies":allergiesInput.value,
            "medication":medicationsInput.value,
            "levelOfEmergency":"green",
            "drugsAndAlcoholHistory":"",
            "chiefComplaint":chiefComplaintInput.value,
            "summary":summaryInput.value,
            "careGiver": {
                "dateAndTime": "Nov 25, 2020"
              }
        }
        fetch("http://localhost:8080/api/patients/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patient)
        })
        .then(response => response.json())
        .catch((err)=>console.log(err))
    })
}

export {
    displayPatientForm
}