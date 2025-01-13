document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputValue('add-money-amount');
    const addMoneyPin = getInputValue('add-money-pin');

    if(addMoneyPin === 1234){
        const balance = getTextValue('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money!')
    }

})
