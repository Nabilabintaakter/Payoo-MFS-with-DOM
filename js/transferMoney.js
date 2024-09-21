document.getElementById('button-send-now').addEventListener('click', function(event){
    event.preventDefault();

    // get current balance, user account no, transfer amount and pin no:
    const currentBalance = getTextFieldValueById('current-balance');
    const userAccountNumber =  getInputFieldValueById('input-user-number');
    const transferAmount = getInputFieldValueById('input-transfer-money');
    const pinNumber = getInputFieldValueById('input-transfer-money-pin');

    // input validation: string length 10 dicchi karon fisrt er 0 ta count hoyna.
    if(String(userAccountNumber).length !== 10 || isNaN(userAccountNumber)){
        alert('invalid user account number!');
        return;
    }
    else if(isNaN(transferAmount)){
        alert('Invalid input!')
    }
    else if(transferAmount > currentBalance){
        alert('Insufficient Balance!');
        return;
    }
    else if(pinNumber === 1234){
        const newBalance = currentBalance - transferAmount;
        document.getElementById('current-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.innerHTML = `
         <div class = "bg-red-200 rounded-lg p-3 mt-2 flex justify-center items-center  hover:border-red-700 hover:border-2">
             <h1 class= "text-red-700 text-base font-medium">Transfer ${transferAmount} Tk. to 
             ${userAccountNumber}. New Balance is: ${newBalance} tk.</h1>
         </div>
         `;

        document.getElementById('transaction-history').appendChild(div);
    }
    else{
        alert('Failed to transfer money. Please try again.')
    }

})