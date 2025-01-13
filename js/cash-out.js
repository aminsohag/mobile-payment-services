document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputValue('cash-out-amount');
    const cashOutPin = getInputValue('cash-out-pin');
    if(cashOutPin === 1234){
        const balance = getTextValue('account-balance');
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed Cash Out!');
    }
})