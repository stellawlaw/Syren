const createHeader = function () {
    const header = document.createElement("h1");
    header.classList.add("new-patient");
    header.innerText = 'Add a New Patient';

    return header;
}

export {
    createHeader
}