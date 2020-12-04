import {
  createHospitalView,
  displayHospitalView
} from "./displayHospitalView.js"
import { clearChildren } from "./displaySinglePatient.js";
import {
  createHeader
} from "./header.js"

fetch(`http://localhost:8080/api/hospital/2`)
  .then(response => response.json())
  .then(hospital => createHospitalView(hospital))


// const container = document.querySelector(".container")
// const loginView = document.createElement("div");
// loginView.classList.add("login");
// const loginButton = document.createElement("button");
// loginButton.classList.add("login-button");
// loginButton.innerText = 'Login';
// loginButton.addEventListener('click', 
// fetch(`http://localhost:8080/api/hospital/2`)
//   .then(response => response.json())
//   .then(hospital => createHospitalView(hospital)))
// loginView.appendChild(loginButton);
// container.appendChild(loginView);
// clearChildren(displayHospitalView(patients));