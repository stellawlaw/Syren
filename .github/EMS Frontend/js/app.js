import{
    createIcons
} from "./createIcons.js"
import { 
    createLoginModal 
} from "./createLoginModal.js";
import { 
    displayPatientForm 
} from "./displayPatientForm.js";
import{
    footer
}from "./footer.js";

const container = document.querySelector("body");

const emsPageHeaderh1 = document.createElement("h1");
emsPageHeaderh1.classList.add("ems-page-header-h1");
emsPageHeaderh1.innerText = "Welcome to Syren!";

container.appendChild(emsPageHeaderh1);
container.appendChild(createIcons());
container.appendChild(createLoginModal());
container.appendChild(footer);

const addPatientIcon = document.querySelector(".add-pt-button");
addPatientIcon.addEventListener('click', () => {
    fetch(`http://localhost:8080/api/hospitals`)
    .then(response => response.json())
    .then(hospitals => displayPatientForm(hospitals))
    .catch(error => console.log(error));
});

const modal = document.querySelector(".modal");
const icon = document.querySelector(".login-icon-button");
const span = document.querySelector(".close");

icon.addEventListener('click', () => {
    modal.style.display = "block";
});

span.onclick = function() {
    modal.style.display = "none";
}
