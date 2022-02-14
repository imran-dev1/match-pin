
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const pinField = document.getElementById('pin-number');
    pinField.value = getPin();
}
const keyInput = document.getElementById('match-pin');
const keypad = document.getElementById('keypad').addEventListener('click', function (e) {
    const key = e.target;
    if (isNaN(key.innerText)) {
        if (key.innerText == 'C') {
            keyInput.value = '';
        }
        if (key.innerText == '<') {
            const stripped = keyInput.value / 10 | 0;
            
            if (stripped == 0) {
                keyInput.value = '';
            } else {
                keyInput.value = stripped;
            }

        }
    }else {
        keyInput.value += key.innerText;
    }
    
});

let submitBtnClickLimit = 3;
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function () { 
     
    const successMessage = document.getElementById('success');
    const errorMessage = document.getElementById('error');
    const pin = document.getElementById('pin-number').value;
    const typedNumbers = document.getElementById('match-pin').value;
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        window.location.href = 'account.html';
    }else{
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    
    submitBtnClickLimit--;
        const tryLimit = document.getElementById('try-limit');tryLimit.innerText = submitBtnClickLimit;
    if (submitBtnClickLimit == 0) {
        const actionLeft = document.querySelector('.action-left').innerText = 'Please, wait 30 minutes to try again!';
        submitBtn.setAttribute('disabled','');

    }
}
}) 
