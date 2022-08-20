// function-1(increase or decrese)
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease == true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;


    return newCaseNumber;
}
// function-2(total value)
function updateCaseTotalprice(newCaseNumber) {

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

// plus
document.getElementById('btn-case-plus').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(true);
    // -------function-2 call -----------
    updateCaseTotalprice(newCaseNumber);
    calculateSubTotal();


})
// Minus
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalprice(newCaseNumber);
    calculateSubTotal();

})