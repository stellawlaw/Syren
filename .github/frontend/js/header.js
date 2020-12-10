const createHeader = function(hospital) {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.classList.add("main-header");
    h1.innerText = hospital.name;
    const h2 = document.createElement("h2");
    h2.classList.add("subheader-header");
    h2.innerText = "Patient Intake List";
    header.appendChild(h1);
    header.appendChild(h2);

    return header;
}

export {
    createHeader
}