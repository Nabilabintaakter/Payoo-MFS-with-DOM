// get value from input field
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
// get value from normal tag
function getTextFieldValueById(id){
    const inputValue = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
