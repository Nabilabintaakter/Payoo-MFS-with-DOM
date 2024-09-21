// add money form action here:

document.getElementById('button-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // get current balance, add amount and pin
    const currentBalance = getTextFieldValueById('current-balance');
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-add-money-pin');

    // input type validation
    if(isNaN(addMoney)){
        alert('Invalid input');
        return;
    }

    // validate the pin  (wrong way)
    if (pinNumber === 1234) {
        const newBalance = currentBalance + addMoney;
        document.getElementById('current-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.innerHTML = `
         <div class = "bg-green-200 rounded-lg p-3 mt-2 flex justify-center items-center  hover:border-green-700 hover:border-2" >
             <h1 class= "text-green-700 text-base font-medium">Cash in ${addMoney} Tk. New Balance is: ${newBalance} tk.</h1>
         </div>
         `;

        document.getElementById('transaction-history').appendChild(div);
    }
    else {
        alert('Failed to add money. Please try again!')
    }
})