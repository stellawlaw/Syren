import{
  displayHospitalView
} from "./displayHospitalView.js"
import {
  createHeader
} from "./header.js"
const container = document.querySelector('.container');

container.prepend(createHeader());

fetch("http://localhost:8080/api/patients")
  .then(response => response.json())
  .then(patients => displayHospitalView(patients))
  .then(patientsElement => container.appendChild(patientsElement))
  .catch(error => console.log(error));


const modal = document.querySelector(".patient-modal");

const allCards = document.querySelectorAll(".patient-card");
console.log(allCards);
// const span = document.querySelector(".close");

allCards.forEach(card => { 
    card.addEventListener('click', () => {
        modal.style.display = "block";
    });
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 