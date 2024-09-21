// const selectBank = document.getElementById("select-bank");

// selectBank.addEventListener("change", function() {
//     const selectedValue = selectBank.value;
//     console.log(selectedValue); // Get the selected value
//     return selectedValue;// Display it in the console
// });

document.getElementById('button-pay-now').addEventListener('click', function (event) {
    event.preventDefault();
    // get current balance, select bank, user account no, transfer amount and pin no:
    const currentBalance = getTextFieldValueById('current-balance');

    const billerAccountNumber = getInputFieldValueById('input-biller-number');
    const payAmount = getInputFieldValueById('input-pay');
    const pinNumber = getInputFieldValueById('input-pay-bill-pin');

    // input validation: string length 10 dicchi karon fisrt er 0 ta count hoyna.
    if (String(billerAccountNumber).length !== 10 || isNaN(billerAccountNumber)) {
        alert('invalid biller account number!');
        return;
    }
    else if (isNaN(payAmount)) {
        alert('Invalid input!')
    }
    else if (payAmount > currentBalance) {
        alert('Insufficient Balance!');
        return;
    }
    else if (pinNumber === 1234) {
        const newBalance = currentBalance - payAmount;
        document.getElementById('current-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.innerHTML = `
        <div class = "bg-red-200 rounded-lg p-3 mt-2 flex justify-center items-center  hover:border-red-700 hover:border-2">
            <h1 class= "text-red-700 text-base font-medium">Pay Bill ${payAmount} Tk. New Balance is: ${newBalance} Tk.</h1>
        </div>
        `;

        document.getElementById('transaction-history').appendChild(div);
    }
    else {
        alert('Failed to pay bill. Please try again.')
    }
})