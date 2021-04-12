let calculateButtons = Array.from(document.querySelectorAll(".calculate"));


const convertToPence = (pounds, shillings, pence) => {
    return pounds * 240 + shillings * 12 + pence;
}

const convertPenceBack = (totalPence) => {
    let pounds = ~~(totalPence / 240);
    let leftoverPence = totalPence % 240;

    let shillings = ~~(leftoverPence / 12);
    let pence = leftoverPence % 12;

    return [pounds, shillings, pence];
}

// function addOneField(whichAccordion) {
//     let formDiv = document.createElement('div');
//     formDiv.setAttribute("class", "currencyTypes")
//     let poundsInput = document.createElement('input');
//     poundsInput.setAttribute("class", "input");
//     let shillingsInput = document.createElement('input');
//     shillingsInput.setAttribute("class", "input");
//     let penceInput = document.createElement('input');
//     penceInput.setAttribute("class", "input");
//
//     poundsInput.setAttribute('placeholder', 'pounds');
//     poundsInput.setAttribute('type', 'text');
//     shillingsInput.setAttribute('placeholder', 'shillings');
//     shillingsInput.setAttribute('type', 'text');
//     penceInput.setAttribute('placeholder', 'pence');
//     shillingsInput.setAttribute('type', 'text');
//
//     formDiv.appendChild(poundsInput);
//     formDiv.appendChild(shillingsInput);
//     formDiv.appendChild(penceInput);
//     forms[whichAccordion].appendChild(formDiv);
// }
//
// for (let i = 0; i < forms.length; i++) {
//     addOneField(i);
//     if (i < 2) {
//         addOneField(i);
//     }
// }




calculateButtons.forEach((button, index) => {
    button.addEventListener('click', ()=> {
        console.log(index);
    })
})




