const convertDivToPence = (divMoneyFields) => {
    let totalPence = 0;
    let fields = [
        divMoneyFields.querySelector('.poundsInput').value,
        divMoneyFields.querySelector('.shillingsInput').value,
        divMoneyFields.querySelector('.penceInput').value]

    let convertedNumbers = fields.map(coin => {
        if (isNaN(parseInt(coin))) {
            return 0;
        } else {
            return parseInt(coin);
        }
    })

    convertedNumbers.forEach((number, index) => {
        if (index === 0) {
            totalPence += number * 240;
        } else if (index === 1) {
            totalPence += number * 12;
        } else {
            totalPence += number;
        }
    })

    return totalPence;
}


class ConvertedAmountFromPence {
    constructor(totalPence) {
        this.pounds = ~~(totalPence / 240);
        let leftoverPence = totalPence % 240;
        this.shillings = ~~(leftoverPence / 12);
        this.pence = leftoverPence % 12;
    }
}

const calculate = (operand) => {
    let inputDivs = Array.from(document.querySelectorAll('.currencyTypes'));
    let divsInPence = [];
    inputDivs.forEach(div => {
        divsInPence.push(convertDivToPence(div));
    })

    let showPoundsElem = document.getElementById('pounds');
    let showShillingsElem = document.getElementById('shillings');
    let showPenceElem = document.getElementById('pence');
    let totalPences;

    if (operand === operands.add) {
        totalPences = divsInPence.reduce((previous, current) => {
            return previous + current;
        }, 0);
    } else if (operand === operands.subtract) {
        totalPences = divsInPence.reduce((a, b) => {
            return a - b;
        });
    } else if (operand === operands.multiply) {
        let multiplier = parseFloat(document.getElementById('multiplier').value);
        totalPences = multiplier * divsInPence;
    } else if (operand === operands.divide) {
        let divisor = parseFloat(document.getElementById('divisor').value);
        totalPences = divsInPence / divisor;
    }

    let finalAnswer = new ConvertedAmountFromPence(totalPences);

    showPoundsElem.innerText = finalAnswer.pounds + '  ' + 'pounds';
    showShillingsElem.innerText = finalAnswer.shillings + '  ' + 'shillings';
    showPenceElem.innerText = finalAnswer.pence + '  ' + 'pence';

}




