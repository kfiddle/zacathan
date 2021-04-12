

const poundsToAdd = [];
const shillingsToAdd = [];
const penceToAdd = [];

const poundsToSub = [];
const shillingsToSub = [];
const penceToSub = [];

const poundsToMult = [];
const shillingsToMult = [];
const penceToMult = [];

const poundsToDiv = [];
const shillingsToDiv = [];
const penceToDiv = [];


const poundFields = [poundsToAdd, poundsToSub, poundsToMult, poundsToDiv];
const shillingsFields = [shillingsToAdd, shillingsToSub, shillingsToMult, shillingsToDiv];
const penceFields = [penceToAdd, penceToSub, penceToMult, penceToDiv];

for (let i = 0; i < forms.length; i++) {
    addOneField(i);
    if (i < 2) {
        addOneField(i);
    }
}



function addOneField(whichAccordion) {
    let formDiv = document.createElement('div');
    formDiv.setAttribute("class", "currencyTypes")
    let poundsInput = document.createElement('input');
    poundsInput.setAttribute("class", "input");
    poundFields[whichAccordion].push(poundsInput);
    let shillingsInput = document.createElement('input');
    shillingsInput.setAttribute("class", "input");
    shillingsFields[whichAccordion].push(shillingsInput);
    let penceInput = document.createElement('input');
    penceInput.setAttribute("class", "input");
    penceFields[whichAccordion].push(penceInput);

    poundsInput.setAttribute('placeholder', 'pounds');
    poundsInput.setAttribute('type', 'text');
    shillingsInput.setAttribute('placeholder', 'shillings');
    shillingsInput.setAttribute('type', 'text');
    penceInput.setAttribute('placeholder', 'pence');
    shillingsInput.setAttribute('type', 'text');

    formDiv.appendChild(poundsInput);
    formDiv.appendChild(shillingsInput);
    formDiv.appendChild(penceInput);
    forms[whichAccordion].appendChild(formDiv);
}

for (let i = 0; i < addCurrencyButtons.length; i++) {
    addCurrencyButtons[i].addEventListener('click', function () {
        addOneField(i)
    });
}


class Form {
    constructor(pounds, shillings, pence) {
        this.pounds = parseInt(pounds);
        this.shillings = parseInt(shillings);
        this.pence = parseInt(pence);
    }

    amountInPence() {
        return this.pounds * 240 + this.shillings * 12 + this.pence;
    }

    convertAmount() {
        let totalInPence = this.amountInPence();
        let poundsOfficial = ~~(totalInPence / 240);
        let remainingPence = totalInPence % 240;
        let shillingsOfficial = ~~(remainingPence / 12);
        let penceOfficial = remainingPence % 12;

        this.pounds = poundsOfficial;
        this.shillings = shillingsOfficial;
        this.pence = penceOfficial;
    }
}

function createFormFromPence(totalInPence) {
    let poundsOfficial = ~~(totalInPence / 240);
    let remainingPence = totalInPence % 240;
    let shillingsOfficial = ~~(remainingPence / 12);
    let penceOfficial = remainingPence % 12;

    return new Form(poundsOfficial, shillingsOfficial, penceOfficial);
}


// function changeToNumbers(list) {
//     let convertedList = [];
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].value === "") {
//             convertedList[i] = 0;
//         } else {
//             convertedList[i] = parseInt(list[i].value);
//         }
//     }
//     return convertedList;
// }

function changeToNumbers(list) {
    return list.map((listItem, index) => {
         if (!listItem.value) {
             return 0
         } else {
             return parseInt(listItem.value);
         }
    })
}



function addOrSubtractTheFields(j) {
    let convertedPounds = changeToNumbers(poundsToAdd);
    let convertedShillings = changeToNumbers(shillingsToAdd);
    let convertedPence = changeToNumbers(penceToAdd);

    let totalPounds = 0;
    let totalShillings = 0;
    let totalPence = 0;

    if (j === "add") {
        for (let i = 0; i < convertedPounds.length; i++) {
            totalPounds += convertedPounds[i];
            totalShillings += convertedShillings[i];
            totalPence += convertedPence[i];
        }
        let totalsForm = new Form(totalPounds, totalShillings, totalPence);
        totalsForm.convertAmount();
        poundsDivs[0].innerHTML = "Pounds:" + "<br>" + totalsForm.pounds;
        shillingsDivs[0].innerHTML = "Shillings:" + "<br>" + totalsForm.shillings;
        penceDivs[0].innerHTML = "Pence:" + "<br>" + totalsForm.pence;

    }

    if (j === "subtract") {

        let convertedPounds = changeToNumbers(poundsToSub);
        let convertedShillings = changeToNumbers(shillingsToSub);
        let convertedPence = changeToNumbers(penceToSub);

        totalPounds = convertedPounds[0];
        totalShillings = convertedShillings[0];
        totalPence = convertedPence[0];

        for (let i = 1; i < convertedPounds.length; i++) {
            totalPounds -= convertedPounds[i];
            totalShillings -= convertedShillings[i];
            totalPence -= convertedPence[i];
        }

        console.log(convertedPounds[0]);

        let totalsForm = new Form(totalPounds, totalShillings, totalPence);
        totalsForm.convertAmount();


        poundsDivs[1].innerHTML = "Pounds:" + "<br>" + totalsForm.pounds;
        shillingsDivs[1].innerHTML = "Shillings:" + "<br>" + totalsForm.shillings;
        penceDivs[1].innerHTML = "Pence:" + "<br>" + totalsForm.pence;
    }
}

const multiply = () => {

    let convertedPounds = changeToNumbers(poundsToMult);
    let convertedShillings = changeToNumbers(shillingsToMult);
    let convertedPence = changeToNumbers(penceToMult);

    let totalToMult = new Form(convertedPounds, convertedShillings, convertedPence);
    let totalPence = totalToMult.amountInPence();
    let multipliedPence = totalPence * multiplier.value;
    let resultingForm = createFormFromPence(multipliedPence);

    poundsDivs[2].innerHTML = "Pounds:" + "<br>" + resultingForm.pounds;
    shillingsDivs[2].innerHTML = "Shillings:" + "<br>" + resultingForm.shillings;
    penceDivs[2].innerHTML = "Pence:" + "<br>" + resultingForm.pence;
}

const divide = () => {

    let convertedPounds = changeToNumbers(poundsToDiv);
    let convertedShillings = changeToNumbers(shillingsToDiv);
    let convertedPence = changeToNumbers(penceToDiv);

    let totalToDiv = new Form(convertedPounds, convertedShillings, convertedPence);
    let totalPence = totalToDiv.amountInPence();
    let dividedPence = totalPence / divisor.value;
    let resultingForm = createFormFromPence(dividedPence);

    poundsDivs[3].innerHTML = "Pounds:" + "<br>" + resultingForm.pounds;
    shillingsDivs[3].innerHTML = "Shillings:" + "<br>" + resultingForm.shillings;
    penceDivs[3].innerHTML = "Pence:" + "<br>" + resultingForm.pence;


}

for (let i = 0; i < calculateButtons.length; i++) {
    calculateButtons[i].addEventListener('click', function () {
        decideOperation(i);
    })
}

function decideOperation(i) {
    if (i === 0) {
        addOrSubtractTheFields("add");
    } else if (i === 1) {
        addOrSubtractTheFields("subtract")
    } else if (i === 2) {
        multiply();
        console.log(multiplier.value)
    } else {
        divide();
    }
}




