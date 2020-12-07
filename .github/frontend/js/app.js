import {
  createHospitalView,
  displayHospitalView
} from "./displayHospitalView.js"
import { clearChildren } from "./displaySinglePatient.js";
import {
  createHeader
} from "./header.js"
import{
  displayHomePageView
}from "./displayHomePage.js"

// fetch(`http://localhost:8080/api/hospital/2`)
//   .then(response => response.json())
//   .then(hospital => createHospitalView(hospital))


const container = document.querySelector(".container")
container.appendChild(displayHomePageView(hospital));

