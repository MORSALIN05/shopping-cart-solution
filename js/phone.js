console.log('phone.js');
function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    let phoneFieldValue;
    const phoneFieldString = phoneNumberField.value;
    phoneFieldValue = parseInt(phoneFieldString);
    //console.log(phoneFieldValue);
    if (isIncrease === true) {
        phoneFieldValue = phoneFieldValue + 1;
    }
    else {
        if (phoneFieldValue != 0) {
            phoneFieldValue = phoneFieldValue - 1;
        }
        else {
            phoneFieldValue = 0;
        }
    }
    phoneNumberField.value = phoneFieldValue;
    return phoneFieldValue;
}

function newPhoneTotalPrice(phoneFieldValue) {
    const phoneTotalPrice = phoneFieldValue * 1219;
    const newPhoneTotalPrice = document.getElementById('phone-total');
    newPhoneTotalPrice.innerText = phoneTotalPrice;
}
document.getElementById('btn-pcase-plus').addEventListener('click', function () {
    phoneFieldValue = updatePhoneNumber(true);
    //console.log(phoneFieldValue);
    newPhoneTotalPrice(phoneFieldValue);
})
document.getElementById('btn-pcase-minus').addEventListener('click', function () {
    phoneFieldValue = updatePhoneNumber(false);
    //console.log(phoneFieldValue);
    newPhoneTotalPrice(phoneFieldValue);
})