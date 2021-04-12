const converterContainer = document.getElementById('converterContainer');

const operands = {
    ADD: 'Add',
    SUBTRACT: 'Subtract',
    MULTIPLY: 'Multiply',
    DIVIDE: 'Divide'
}

const addMoreCurrencyComponent = () => {
    let addCurrencyButton = document.createElement('button');
    addCurrencyButton.classList.add('function');
    addCurrencyButton.classList.add('addCurrency')
    addCurrencyButton.innerText = 'Add More Currency';
    return addCurrencyButton;
}

const createFinalAnswerComponent = () => {

    let solutionButton = document.createElement('button');
    solutionButton.classList.add('solution');

    let answers = new Map([
        ['Total Pounds', ['answer', 'pounds']],
        ['Total Shillings', ['answer', 'shillings']],
        ['Total Pence', ['answerLast', 'pence']]
    ])

    for (let [key, value] of answers.entries()) {
        let div = document.createElement('div')
        div.classList.add(value[0]);
        div.classList.add(value[1]);
        div.innerText = key;
        solutionButton.appendChild(div);
    }
    return solutionButton;
}





const buildAConverterComponent = operand => {
    let outerButton = document.createElement('button');
    outerButton.className = 'accordion';
    outerButton.opened = false;

    let span = document.createElement('span');
    span.classList.add('accordionLabel');
    span.innerText = operand;

    outerButton.appendChild(span);
    let panel = document.createElement('div');
    panel.classList.add('panel');
    let formsDiv = document.createElement('div');
    formsDiv.classList.add('forms');
    let lineTwoDiv = document.createElement('div');
    lineTwoDiv.classList.add('lineTwo');

    if (operand === operands.ADD || operand === operands.SUBTRACT) {
        let addCurrencyButton = addMoreCurrencyComponent();
        lineTwoDiv.appendChild(addCurrencyButton);
    } else if (operand === operands.MULTIPLY) {
        let multiplyButton = document.createElement('button');
        multiplyButton.className = 'multiplier';
        multiplyButton.innerHTML = `
          <div class="operator">
                <i id="times" class="fa fa-times"></i>
                </div>
                <div class="addNumber">
                    <input type="number" id="multiplier">
                </div>`
        lineTwoDiv.appendChild(multiplyButton);
    } else if (operand === operands.DIVIDE) {
        let divisionButton = document.createElement('button');
        divisionButton.className = 'solution';
        divisionButton.innerHTML = `
            <ul class="multiplier">Divide By: </ul>
                <input type="number" id="divisor">`
        lineTwoDiv.appendChild(divisionButton)
    }


    let calcButton = document.createElement('button');
    calcButton.classList.add('function');
    calcButton.classList.add('calculate')
    calcButton.innerText = 'Calculate';
    lineTwoDiv.appendChild(calcButton);

    let solutionButton = createFinalAnswerComponent();
    lineTwoDiv.appendChild(solutionButton);

    panel.appendChild(formsDiv);
    panel.appendChild(lineTwoDiv);
    converterContainer.appendChild(outerButton);
    converterContainer.appendChild(panel);
}

for (let key in operands) {
    // buildAConverterComponent(operands[key]);
    createOuterOperandButtons(operands[key]);
}

let forms = Array.from(document.querySelectorAll(".forms"));
let addCurrencyButtons = Array.from(document.querySelectorAll(".addCurrency"));
let poundsDivs = Array.from(document.querySelectorAll(".pounds"));
let shillingsDivs = Array.from(document.querySelectorAll(".shillings"));
let penceDivs = Array.from(document.querySelectorAll(".pence"));
let multiplier = document.getElementById('multiplier');
let divisor = document.getElementById("divisor");

let accordions = Array.from(document.querySelectorAll(".accordion"));


accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {

        accordions.forEach(accordion => {
            accordion.nextElementSibling.style.display = 'none';
            accordion.opened = false;
        })

        accordion.nextElementSibling.style.display === 'block' ?
            accordion.nextElementSibling.style.display = 'none' :
            accordion.nextElementSibling.style.display = 'block'
        accordion.opened = true;
    })

})





