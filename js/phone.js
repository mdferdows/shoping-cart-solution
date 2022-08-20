// function -1(increment or decrement)
function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneFieldString = phoneNumberField.value;
    const previousPhoneFieldValue = parseInt(phoneFieldString);

    let newPhoneNumber;
    if (isIncrease == true) {
        newPhoneNumber = previousPhoneFieldValue + 1;
    }
    else {
        newPhoneNumber = previousPhoneFieldValue - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}
// function-2
function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total')
    phoneTotalElement.innerText = phoneTotalPrice
}

// plus
document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const newPhoneNumber = updatePhoneNumber(true);
    // price
    updatePhoneTotalPrice(newPhoneNumber);
    //calculate total
    calculateSubTotal();
})
// minus 
document.getElementById('phone-number-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    //price
    updatePhoneTotalPrice(newPhoneNumber);
    //calculate total
    calculateSubTotal()

})