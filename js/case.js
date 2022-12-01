/*
1. add event listener to the case plus button
2. get the vlaue insde the case nubmer filed(input field)
3. convert the no to an integer
4.calculate the new case number field
5. set the value to the case number field

*/
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;

    if (isIncrease === true) {
        //let newCaseValue;
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        if (previousCaseNumber != 0) {
            newCaseNumber = previousCaseNumber - 1;
        }
        else {
            newCaseNumber = 0;
        }
    }
    //console.log(newCaseNumber);
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;

}
function newCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-unit-price');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    newCaseTotalPrice(newCaseNumber);

})

document.getElementById('btn-case-minus').addEventListener('click', function (isIncrease) {
    const newCaseNumber = updateCaseNumber(false);
    newCaseTotalPrice(newCaseNumber);
    //const caseTotalElement = document.getElementById('case-unit-price');
    //newCaseTotalElement.innerText = caseTotalPriceNew;

})

document.getElementById('btn-pcase-plus').addEventListener('click', function () {
    const newPhoneCaseNumber = updateCaseNumber(isIncrease);

})
