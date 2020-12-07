import {
    clearChildren
} from "./displaySinglePatient.js"

const displayHomePageView = function (hospitals) {
    const container = document.querySelector(".container");
    clearChildren(container);
    const homepageHeader  = document.createElement("header");
    homepageHeader.classList.add("homepage-header");
    const homepageheaderh1 = document.createElement("h1");
    homepageheaderh1.classList.add("homepage-header-h1");
    homepageheaderh1.innerText = "Syren"
    const loginView = document.createElement("div");
    loginView.classList.add("login");
    const loginButton = document.createElement("button");
    loginButton.classList.add("login-button");
    loginButton.innerText = 'Login';
    // const fetchHospital =  fetch(`http://localhost:8080/api/hospital/6`)
    // .then(response => response.json())
    // .then(hospital => createHospitalView(hospital))
    // loginButton.addEventListener('click', fetchHospital);    
    container.appendChild(homepageHeader);
    homepageHeader.appendChild(homepageheaderh1);
    loginView.appendChild(loginButton);
    container.appendChild(loginView);
    

    const myModal = document.createElement("div");
    myModal.classList.add("modal");
    myModal.setAttribute("id", "myModal")
    
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    
    const span = document.createElement("span");
    span.classList.add("close");
    span.innerText = "&times;"

    const form = document.createElement("form");
    form.classList.add("login-form");
    form.setAttribute("action", "post");

    const inputUserName = document.createElement("input");
    inputUserName.classList.add("username");
    inputUserName.setAttribute("type", "text");
    inputUserName.setAttribute("placeholder", "UserName");

    const breakBR = document.createElement("br");
    
    const inputPassword = document.createElement("input");
    inputPassword.classList.add("password");
    inputPassword.setAttribute("type", "text");
    inputPassword.setAttribute("placeholder", "Password");

    const homeLoginButton = document.createElement("button");
    homeLoginButton.classList.add("login-button");
    homeLoginButton.innerText = "Login";

    const homeLogoutButton = document.createElement("button");
    homeLogoutButton.classList.add("logout-button");
    homeLoginButton.innerText = "Logout";

    
    modalContent.appendChild(span);
    span.appendChild(form);
    form.appendChild(inputUserName);
    form.appendChild(inputPassword);
    form.appendChild(homeLoginButton);
    form.appendChild(homeLogoutButton);
    homeLoginButton.addEventListener('click', modalContent );






    // clearChildren(displayHospitalView(patients));

    return displayHomePageView
}



export {
    displayHomePageView
}

{/* <div id="myModal " class="modal ">

<div class="modal-content ">
    <span class="close ">&times;</span>
    <form action="post " class="login-form ">
        <input type="text " class="username " placeholder="Username "><br>
        <input type="text " class="password " placeholder="Password "><br>
        <button class="login-button ">Login</button>
        <button class="logout-button ">Logout</button>
    </form>
</div>

</div> */}