// withdraw money form action here:

document.getElementById('button-withdraw-money').addEventListener('click', function(event){
    event.preventDefault();

    // get current balance, add amount and pin
    const currentBalance = getTextFieldValueById('current-balance');
    const withdrawMoney = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    // input type validation
    if(isNaN(withdrawMoney)){
        alert('Invalid input');
        return;
    }

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
        div.innerHTML = `
        <div class = "bg-red-200 rounded-lg p-3 mt-2 flex justify-center items-center  hover:border-red-700 hover:border-2" >
            <h1 class= "text-red-700 text-base font-medium">Withdraw ${withdrawMoney} Tk. New Balance is: ${newBalance} Tk.</h1>
        </div>
        `;

        document.getElementById('transaction-history').appendChild(div);
    }
    else{
        alert('Failed to withdraw money. Please try again!')
    }
})