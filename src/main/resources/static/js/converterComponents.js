const converterContainer = document.getElementById('converterContainer');



let operands = {
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
        ['Total Shillings', ['answer','shillings']],
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
    }

    let calcButton = document.createElement('button');
    calcButton.classList.add('function');
    calcButton.classList.add('Calculate')
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
    buildAConverterComponent(operands[key]);
}

let forms = Array.from(document.querySelectorAll(".forms"));
let addCurrencyButtons = Array.from(document.querySelectorAll(".addCurrency"));
let calculateButtons = Array.from(document.querySelectorAll(".calculate"));
let poundsDivs = Array.from(document.querySelectorAll(".pounds"));
let shillingsDivs = Array.from(document.querySelectorAll(".shillings"));
let penceDivs = Array.from(document.querySelectorAll(".pence"));
let multiplier = document.getElementById('multiplier');
let divisor = document.getElementById("divisor");

let accordions = Array.from(document.querySelectorAll(".accordion"));


accordions.forEach(accordion => {
    accordion.addEventListener('click', ()=> {
        accordion.classList.toggle("active");
        let nextPanel = accordion.nextElementSibling;
        nextPanel.style.display === 'block' ? nextPanel.style.display = 'none' : nextPanel.style.display = 'block'
    })

})



