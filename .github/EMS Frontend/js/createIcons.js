const createIcons = function () {
    const icons = document.createElement("div");
    icons.classList.add("icons");
    const addPatientIcon = document.createElement("div");
    addPatientIcon.classList.add("add-pt-button");
    const patientListIcon = document.createElement("div");
    patientListIcon.classList.add("see-pt-list");
    const loginIcon = document.createElement("div");
    loginIcon.classList.add("login-icon-button");
    icons.appendChild(addPatientIcon);
    icons.appendChild(patientListIcon);
    icons.appendChild(loginIcon);

    const addPatientImage = document.createElement("img");
    addPatientImage.src = "./imgs/add-icon.png";
    const patientListImage = document.createElement("img");
    patientListImage.src = "./imgs/coming-soon-icon.png ";
    const loginImage = document.createElement("img");
    loginImage.src = "./imgs/login.png ";

    addPatientIcon.appendChild(addPatientImage);
    patientListIcon.appendChild(patientListImage);
    loginIcon.appendChild(loginImage);

    return icons;
}

export {
    createIcons
}