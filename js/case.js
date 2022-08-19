function updateCaseNumber(isIncrease) {
    const caseField = document.getElementById('case-field');
    const caseNumberString = caseField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber = previousCaseNumber + 1;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCasTotalePrice(newCaseNumber) {

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
    console.log(newCaseNumber, caseTotalPrice)

}
document.getElementById('case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCasTotalePrice(newCaseNumber);
    calculateSubTotal();
});




document.getElementById('case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCasTotalePrice(newCaseNumber);
    calculateSubTotal();
});

