// withdraw money form action here:

document.getElementById('button-withdraw-money').addEventListener('click', function(event){
    event.preventDefault();

    // get current balance, add amount and pin
    const currentBalance = getTextFieldValueById('current-balance');
    const withdrawMoney = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    // check if balance is insufficient
    if(withdrawMoney > currentBalance){
        alert('Insufficient balance!')
        return;
    }

    // validate the pin  (wrong way)
    if(pinNumber === 1234){
        const newBalance = currentBalance - withdrawMoney;
        document.getElementById('current-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-red-300 rounded-lg')
        div.innerHTML = `
        <h1 class = "text-red-700 text-lg font-medium"> ${withdrawMoney} Tk. withdraw. New Balance is ${newBalance}</h1>
        `
        document.getElementById('transaction-history').appendChild(div);
    }
    else{
        alert('Failed to withdraw money. Please try again!')
    }
})