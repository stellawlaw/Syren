import{
    createIcons
} from "./createIcons.js"
import { 
    createLoginModal 
} from "./createLoginModal.js";
import { 
    displayPatientForm 
} from "./displayPatientForm.js";

const container = document.querySelector("body");

container.appendChild(createIcons());
container.appendChild(createLoginModal());

const addPatientIcon = document.querySelector(".add-pt-button");
addPatientIcon.addEventListener('click', () => {
    displayPatientForm();
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
