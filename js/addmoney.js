// add money form action here:

document.getElementById('button-add-money').addEventListener('click', function(event){
    event.preventDefault();

    // get current balance, add amount and pin
    const currentBalance = getTextFieldValueById('current-balance');
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-add-money-pin');

    // validate the pin  (wrong way)
    if(pinNumber === 1234){
        const newBalance = currentBalance + addMoney;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money. Please try again!')
    }
})