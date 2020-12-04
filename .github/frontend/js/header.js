

const createHeader = function (hospital) {
    const h1 = document.createElement("h1")
    h1.innerText = `${hospital.name} - Patient Intake List`;


    return h1;
}

export {
    createHeader
}