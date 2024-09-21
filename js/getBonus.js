// get bonus form action here:

document.getElementById('button-get-bonus').addEventListener('click', function (event) {
    event.preventDefault();

    // get current balance, coupon and bonus amount: 
    const currentBalance = getTextFieldValueById('current-balance');
    const addCoupon = document.getElementById('input-add-coupon').value;
    const bonus = 15;

    // action form:
    if (addCoupon === 'NEW50') {
        const newBalance = currentBalance + bonus;
        alert('Congratulations! You got 15 Tk. bonus.')
        document.getElementById('current-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.innerHTML = `
     <div class = "bg-green-200 rounded-lg p-3 mt-2 flex justify-center items-center  hover:border-green-700 hover:border-2">
         <h1 class= "text-green-700 text-base font-medium">Got bonus ${bonus} Tk. New Balance is: ${newBalance} tk.</h1>
     </div>
     `;

        document.getElementById('transaction-history').appendChild(div);
    }
    else {
        alert('Wrong coupon!')
    }
})