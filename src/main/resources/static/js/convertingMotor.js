const convertToPence = (poundsShillingsPence) => {
    return poundsShillingsPence[0] * 240 + poundsShillingsPence[1] * 12 + poundsShillingsPence[2];
}

class ConvertedAmountFromPence {
    pounds;
    shillings;
    pence;
    totalInPence

    constructor(totalPence) {
        this.totalInPence = totalPence;
        this.pounds = ~~(totalPence / 240);
        let leftoverPence = totalPence % 240;
        this.shillings = ~~(leftoverPence / 12);
        this.pence = leftoverPence % 12;
    }
}

const convertPenceBack = (totalPence) => {
    let pounds = ~~(totalPence / 240);
    let leftoverPence = totalPence % 240;

    let shillings = ~~(leftoverPence / 12);
    let pence = leftoverPence % 12;

    return [pounds, shillings, pence];
}


const totalOf = (listOfNumbers) => {
    return listOfNumbers.reduce((previous, current) => {
        return previous + parseInt(current.value);
    }, 0);
}

const reduceTheLists = (lists, operand) => {
    let answer = [];
    lists.forEach(list => {
        let listWithZeros = list.map(input => {
            if (isNaN(parseInt(input.value))) {
                return 0;
            } else {
                return parseInt(input.value);
            }
        })

        if (operand === operands.add) {
            answer.push(listWithZeros.reduce((previous, current) => {
                return previous + current;
            }, 0));
        } else {
            answer.push(listWithZeros.reduce((a, b) => {
                return a - b;
            }));
        }
    })
    return answer;
}


const calculate = (operand) => {
    // let pounds = Array.from(document.querySelectorAll('.poundsInput'));
    // let shillings = Array.from(document.querySelectorAll('.shillingsInput'));
    // let pence = Array.from(document.querySelectorAll('.penceInput'));

    let allGivenAmounts = [Array.from(document.querySelectorAll('.poundsInput')),
        Array.from(document.querySelectorAll('.shillingsInput')),
        Array.from(document.querySelectorAll('.penceInput'))];

    let showPoundsElem = document.getElementById('pounds');
    let showShillingsElem = document.getElementById('shillings');
    let showPenceElem = document.getElementById('pence');
    let totalPences;

    if (operand === operands.add || operand === operands.subtract) {
        totalPences = convertToPence(reduceTheLists(allGivenAmounts, operand));
        console.log(totalPences);
        console.log(allGivenAmounts[0]);
        console.log(allGivenAmounts[0].length);
    }


    let finalAnswer = new ConvertedAmountFromPence(totalPences);
    console.log(operand);
    console.log(finalAnswer);

    showPoundsElem.innerText = finalAnswer.pounds + '  ' + 'pounds';
    showShillingsElem.innerText = finalAnswer.shillings + '  ' + 'shillings';
    showPenceElem.innerText = finalAnswer.pence + '  ' + 'pence';

}




