// logout btn click

document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = './index.html'
})


// show btn actions here
// show add money form
document.getElementById('show-add-money-btn').addEventListener('click', function(){
    showSectionById('add-money-form');
})


// show cash out form
document.getElementById('show-cash-out-btn').addEventListener('click', function(){
    showSectionById('cash-out-form');
})


// show transfer money form
document.getElementById('show-transfer-money-btn').addEventListener('click', function(){
    showSectionById('transfer-money-form');
}) 


// show transaction history
document.getElementById('show-transaction-btn').addEventListener('click', function(){
    showSectionById('transaction-form');
})