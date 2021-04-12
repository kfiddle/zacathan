const converterContainer = document.getElementById('converterContainer');

const operands = ['Add', 'Subtract', 'Multiply', 'Divide'];


let accordionButtons = [];


for (let operand of operands) {
    createOuterOperandButtons(operand);
    console.log(operand)
}


const closePanel = button => {
    converterContainer.removeChild(button.nextElementSibling);
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


const createPanel = (operand) => {
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
    // converterContainer.appendChild(panel);
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
        }
        else if (!outerButton.opened) {
            accordionButtons.forEach(button=> {
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


    // let accordionButtons = Array.from(document.querySelectorAll('.accordion'));
    //
    //
    // if (panel) {
    //     converterContainer.removeChild(panel);
    // }

    // if (!outerButton.opened) {
    // let panel = createPanel(operand);
    // converterContainer.insertBefore(panel, outerButton.nextElementSibling);
    //     outerButton.opened = true;
    // }


    accordionButtons.push(outerButton);
    converterContainer.appendChild(outerButton);

}






