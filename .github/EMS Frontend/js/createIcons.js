const createIcons = function () {
    const icons = document.createElement("div");
    icons.classList.add("icons");
    const addPatientIcon = document.createElement("div");
    addPatientIcon.classList.add("add-pt-button");

    const loginIcon = document.createElement("div");
    loginIcon.classList.add("login-icon-button");
    icons.appendChild(addPatientIcon);
    icons.appendChild(loginIcon);

    const addPatientImage = document.createElement("img");
    addPatientImage.src = "./imgs/add-icon1.png";
 
    const loginImage = document.createElement("img");
    loginImage.src = "./imgs/login1.png ";

    addPatientIcon.appendChild(addPatientImage);
    loginIcon.appendChild(loginImage);

    return icons;
}

export {
    createIcons
}