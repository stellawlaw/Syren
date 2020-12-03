const modal = document.querySelector(".modal");

const icon = document.querySelector(".login-icon-button");

const span = document.querySelector(".close");

icon.addEventListener('click', () => {
    modal.style.display = "block";
});

span.onclick = function() {
    modal.style.display = "none";
}