document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputValue('cash-out-amount');
    const cashOutPin = getInputValue('cash-out-pin');
    if(isNaN(cashOut)){
        alert('Failed to cash out');
        return;
    }

    if(cashOutPin === 1234){
        const balance = getTextValue('account-balance');
        if(cashOut > balance){
            alert('you have do not enough money');
            return;
        }
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

         // create p for tran history
         const div = document.createElement('div');
         div.classList.add('bg-purple-500');
         div.innerHTML = `
            <h1>Cash out</h1>
            <p>Cash Out: ${cashOut} Tk. New Balance: ${newBalance}</p>
         `
        // add tran history
        document.getElementById('tran-container').appendChild(div);
    }
    else{
        alert('Failed Cash Out!');
    }
})