document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputValue('add-money-amount');
    const addMoneyPin = getInputValue('add-money-pin');

    if(isNaN(addMoney)){
        alert('Failed add Money');
        return;
    }

    if(addMoneyPin === 1234){
        const balance = getTextValue('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

        // create p for tran history
         const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
        // add tran history
        document.getElementById('tran-container').appendChild(p);
    }
    else{
        alert('Failed to add money!')
    }

})
