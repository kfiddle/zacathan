const converterContainer = document.getElementById('converterContainer');

let accordionButtons = [];

const operands = {
    add: 'Add',
    subtract: 'Subtract',
    multiply: 'Multiply',
    divide: 'Divide'
}


for (let operand in operands) {
    createOuterOperandButtons(operands[operand]);
}

const closePanel = button => {
    converterContainer.removeChild(button.nextElementSibling);
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
        div.id = value[1];
        div.innerText = key;
        solutionButton.appendChild(div);
    }
    return solutionButton;
}

const addOneField = () => {
    let formDiv = document.createElement('div');
    formDiv.setAttribute("class", "currencyTypes")
    let poundsInput = document.createElement('input');
    poundsInput.setAttribute("class", "input");
    poundsInput.setAttribute("class", "poundsInput");

    let shillingsInput = document.createElement('input');
    shillingsInput.setAttribute("class", "input");
    shillingsInput.setAttribute('class', 'shillingsInput');
    let penceInput = document.createElement('input');
    penceInput.setAttribute("class", "input");
    penceInput.setAttribute('class', 'penceInput');

    poundsInput.setAttribute('placeholder', 'pounds');
    poundsInput.setAttribute('type', 'text');
    shillingsInput.setAttribute('placeholder', 'shillings');
    shillingsInput.setAttribute('type', 'text');
    penceInput.setAttribute('placeholder', 'pence');
    shillingsInput.setAttribute('type', 'text');

    formDiv.appendChild(poundsInput);
    formDiv.appendChild(shillingsInput);
    formDiv.appendChild(penceInput);
    return formDiv;
}

const addMoreCurrencyComponent = () => {
    let addCurrencyButton = document.createElement('button');
    addCurrencyButton.classList.add('function');
    addCurrencyButton.classList.add('addCurrency')
    addCurrencyButton.innerText = 'Add More Currency';
    return addCurrencyButton;
}


const createPanel = (operand) => {
    let panel = document.createElement('div');
    panel.classList.add('panel');
    let formsDiv = document.createElement('div');
    formsDiv.classList.add('forms');
    let lineTwoDiv = document.createElement('div');
    lineTwoDiv.classList.add('lineTwo');

    if (operand === operands.add || operand === operands.subtract) {
        let addCurrencyButton = addMoreCurrencyComponent();

        addCurrencyButton.addEventListener('click', () => {
            formsDiv.appendChild(addOneField());
        });

        lineTwoDiv.appendChild(addCurrencyButton);
        formsDiv.appendChild(addOneField());
        formsDiv.appendChild(addOneField());

    } else if (operand === operands.multiply) {
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
        formsDiv.appendChild(addOneField());

    } else if (operand === operands.divide) {
        let divisionButton = document.createElement('button');
        divisionButton.className = 'solution';
        divisionButton.innerHTML = `
            <ul class="multiplier">Divide By: </ul>
                <input type="number" id="divisor">`
        lineTwoDiv.appendChild(divisionButton)
        formsDiv.appendChild(addOneField());

    }

    let calcButton = document.createElement('button');
    calcButton.classList.add('function');
    calcButton.classList.add('calculate')
    calcButton.innerText = 'Calculate';
    calcButton.addEventListener('click', ()=> {
        calculate(operand);
    });

    lineTwoDiv.appendChild(calcButton);

    let solutionButton = createFinalAnswerComponent();
    lineTwoDiv.appendChild(solutionButton);

    panel.appendChild(formsDiv);
    panel.appendChild(lineTwoDiv);
    panel.style.display = 'block';
    return panel;
}

function createOuterOperandButtons(operand) {
    let outerButton = document.createElement('button');
    outerButton.className = 'accordion';
    outerButton.opened = false;

    let span = document.createElement('span');
    span.classList.add('accordionLabel');
    span.innerText = operand;
    outerButton.appendChild(span);
    outerButton.addEventListener('click', () => {
        if (outerButton.opened) {
            closePanel(outerButton)
            outerButton.opened = false;
        } else if (!outerButton.opened) {
            accordionButtons.forEach(button => {
                if (button !== outerButton && button.opened === true) {
                    closePanel(button);
                    button.opened = false;
                }
            })
            let panel = createPanel(operand);
            converterContainer.insertBefore(panel, outerButton.nextElementSibling);
            outerButton.opened = true;
        }
    })


    accordionButtons.push(outerButton);
    converterContainer.appendChild(outerButton);

}






