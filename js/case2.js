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
    if (previousCaseNumber > 0) {

        if (isIncrease === true) {
            //let newCaseValue;
            newCaseNumber = previousCaseNumber + 1;
        }
        else {
            newCaseNumber = previousCaseNumber - 1;
        }
        //console.log(newCaseNumber);
        caseNumberField.value = newCaseNumber;
        return newCaseNumber;
    }

}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-unit-price');
    caseTotalElement.innerText = caseTotalPrice;
})

document.getElementById('btn-case-minus').addEventListener('click', function (isIncrease) {
    const newCaseNumber = updateCaseNumber(false);
    const newCaseTotalElement = document.getElementById('case-unit-price')
    const newCaseTotalValue = newCaseTotalElement.innerText;
    const caseTotalPriceNew = parseInt(newCaseTotalValue) - 59;
    //const caseTotalElement = document.getElementById('case-unit-price');
    newCaseTotalElement.innerText = caseTotalPriceNew;

})
