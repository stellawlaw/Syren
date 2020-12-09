const createHeader = function(hospital) {
    const h1 = document.createElement("h1")
    h1.classList.add("main-header")
    h1.innerText = hospital.name;
    const h3 = document.createElement("h3")
    h3.innerText = "Patient Intake List";
    h3.prepend(h1);

    console.log(hospital.name);

    return h3;
}

export {
    createHeader
}