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

const container = document.querySelector(".container")
container.appendChild(displayHomePageView());

