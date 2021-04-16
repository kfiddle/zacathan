const renderFromZero = (element) => {
    if (isNaN(parseInt(element.value))) {
        return 0;
    } return parseInt(element.value)
}

const calculate = (operand) => {
    let finalAmount = {};
    let inputDivs = Array.from(document.querySelectorAll('.currencyTypes'));
    let divsInPence = [];
    let totalPence;

    inputDivs.forEach(div => {
        divsInPence.push(
        renderFromZero(div.querySelector('.poundsInput')) * 240 +
        renderFromZero(div.querySelector('.shillingsInput')) * 12 +
        renderFromZero(div.querySelector('.penceInput')))
    })

    if (operand === operands.add) {
        totalPence = divsInPence.reduce((previous, current) => previous + current, 0);
    } else if (operand === operands.subtract) {
        totalPence = divsInPence.reduce((a, b) => a - b);
    } else if (operand === operands.multiply) {
        let multiplier = parseFloat(document.getElementById('multiplier').value);
        totalPence = multiplier * divsInPence;
    } else if (operand === operands.divide) {
        let divisor = parseFloat(document.getElementById('divisor').value);
        totalPence = divsInPence / divisor;
    }

    finalAmount.pounds = ~~(totalPence / 240);
    let leftoverPence = totalPence % 240;
    finalAmount.shillings = ~~(leftoverPence / 12);
    finalAmount.pence = leftoverPence % 12;

    let showPoundsElem = document.getElementById('pounds');
    let showShillingsElem = document.getElementById('shillings');
    let showPenceElem = document.getElementById('pence');

    showPoundsElem.innerHTML = finalAmount.pounds + "<br>" + 'pounds';
    showShillingsElem.innerHTML = finalAmount.shillings + "<br>"+ 'shillings';
    showPenceElem.innerHTML = finalAmount.pence + "<br>" + 'pence';
}
