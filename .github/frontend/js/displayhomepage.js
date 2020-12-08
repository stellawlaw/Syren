import {
    clearChildren
} from "./displaySinglePatient.js"

import{
    createHospitalView
}from "./displayHospitalView.js"

const displayHomePageView = function (hospital) {
    const container = document.querySelector(".container");
    clearChildren(container);

    const homepageHeader  = document.createElement("header");
    homepageHeader.classList.add("homepage-header");

    const homepageheaderh1 = document.createElement("h1");
    homepageheaderh1.classList.add("homepage-header-h1");
    homepageheaderh1.innerText = "Syren";

    const loginView = document.createElement("div");
    loginView.classList.add("login");

    const loginButton = document.createElement("button");
    loginButton.classList.add("home-login-button");
    loginButton.innerText = 'Login';

    container.appendChild(homepageHeader);
    homepageHeader.appendChild(homepageheaderh1);
    loginView.appendChild(loginButton);
    container.appendChild(loginView);
    
    const myModal = document.createElement("div");
    myModal.classList.add("modal");
    myModal.setAttribute("id", "myModal")
    container.appendChild(myModal);
    
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    
    const span = document.createElement("span");
    span.classList.add("close");
    span.innerHTML = "&times;"

    const form = document.createElement("form");
    form.classList.add("login-form");
    form.setAttribute("action", "post");

    const inputUserName = document.createElement("input");
    inputUserName.classList.add("username");
    inputUserName.setAttribute("type", "text");
    inputUserName.setAttribute("placeholder", "UserName");

    const breakBR1 = document.createElement("br");
    const breakBR2 = document.createElement("br");
    
    const inputPassword = document.createElement("input");
    inputPassword.classList.add("password");
    inputPassword.setAttribute("type", "text");
    inputPassword.setAttribute("placeholder", "Password");

    const homeLoginButton = document.createElement("button");
    homeLoginButton.classList.add("login-button");
    homeLoginButton.innerText = "Login";

    const homeLogoutButton = document.createElement("button");
    homeLogoutButton.classList.add("logout-button");
    homeLogoutButton.innerText = "Logout";

    modalContent.appendChild(span);
    modalContent.appendChild(form);
    form.appendChild(inputUserName);
    form.appendChild(inputPassword);
    form.appendChild(homeLoginButton);
    form.appendChild(homeLogoutButton);
    inputUserName.appendChild(breakBR1);
    inputPassword.appendChild(breakBR2);

    loginButton.addEventListener('click', ()=> {
        myModal.append(modalContent)
        myModal.style.display = "block";
    });
    function closeModal() {
        clearChildren(container)
        container.appendChild(homepageHeader);
        container.appendChild(loginView);
        container.appendChild(myModal);

        myModal.style.display = "none";

    }
    span.addEventListener('click', closeModal);
    homeLoginButton.addEventListener('click', ()=> {
        clearChildren(container)
        
        let hospitalId = 0;
        let input = inputUserName.value;
        
        if (input === "Mt. Carmel West Hospital"){
            hospitalId = 6;
        }else if(input === "Grant Hospital"){
            hospitalId = 2;
        }

        fetch(`http://localhost:8080/api/hospital/${hospitalId}`)
            .then(response => response.json())
            .then(hospital => createHospitalView(hospital))
    });    

    return myModal;
}

export {
    displayHomePageView
}
