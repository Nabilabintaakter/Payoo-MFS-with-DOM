document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = getInputFieldValueById('phone-number');
    const pinNumber = getInputFieldValueById('pin-number');

    if(phoneNumber === 5 && pinNumber === 1234){
        window.location.href = './home.html'
    }
    else{
        alert('Wrong phone number or pin!')
    }
})