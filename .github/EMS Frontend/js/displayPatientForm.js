import{
    createHeader
}from "./createHeader.js"

const createRadioButtons = function () {
    const radioButtonDiv = document.createElement("div");
    radioButtonDiv.classList.add("radio-buttons");

    const maleRadio = document.createElement("input");
    maleRadio.setAttribute('type', 'radio');
    maleRadio.id = "male";
    maleRadio.value = "male";
    const maleRadioLabel = document.createElement("label");
    maleRadioLabel.htmlFor = "male";
    const femaleRadio = document.createElement("input");
    femaleRadio.setAttribute('type', 'radio');
    femaleRadio.id = "female";
    femaleRadio.value = "female";
    const femaleRadioLabel = document.createElement("label");
    femaleRadioLabel.htmlFor = "female";
    const otherRadio = document.createElement("input");
    otherRadio.setAttribute('type', 'radio');
    otherRadio.id = "other";
    otherRadio.value = "other";
    const otherRadioLabel = document.createElement("label");
    otherRadioLabel.htmlFor = "other";

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
    const locLethargic = document.createElement("option");
    locLethargic.value = "lethargic";
    const locUnresponsive = document.createElement("option");
    locUnresponsive.value = "unresponsive";
    locSelect.appendChild(locAlert);
    locSelect.appendChild(locLethargic);
    locSelect.appendChild(locUnresponsive);

    selectBoxesDiv.appendChild(locLabel);
    selectBoxesDiv.appendChild(locSelect);

    return selectBoxesDiv;
}

const displayPatientForm = function () {
    const body = document.querySelector("body");
    body.appendChild(createHeader());

    const patientFormDiv = document.createElement("div");
    patientForm.classList.add("pt-submit-form");
    const patientForm = document.createElement("form");
    patientForm.setAttribute('action', 'post');
    patientForm.classList.add("submit-form");
    patientForm.appendChild(createRadioButtons());
    patientForm.appendChild(createSelectBoxes());

    return icons;
}

export {
    displayPatientForm
}