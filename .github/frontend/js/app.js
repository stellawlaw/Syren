const modal = document.querySelector(".patient-modal");

const allCards = document.querySelectorAll(".patient-card");

const span = document.querySelector(".close");

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