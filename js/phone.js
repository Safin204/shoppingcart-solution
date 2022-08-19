function updatePhoneNumber(isIncrease) {
    const phoneField = document.getElementById('phone-field');
    const phoneNumberString = phoneField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneField.value = newPhoneNumber;
    return newPhoneNumber;
}



function updatePhoneTotalePrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
    console.log(newPhoneNumber, phoneTotalPrice)
}


document.getElementById('phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalePrice(newPhoneNumber);
    calculateSubTotal();
});
document.getElementById('phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalePrice(newPhoneNumber);
    calculateSubTotal();
})