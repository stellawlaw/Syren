import {
  createHospitalView
} from "./displayHospitalView.js"


fetch(`http://localhost:8080/api/hospital/2`)
  .then(response => response.json())
  .then(hospital => createHospitalView(hospital))