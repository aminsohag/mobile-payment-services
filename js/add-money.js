document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoney = getInputAmount('add-money-amount');
    const addMoneyPin = getInputAmount('add-money-pin');
    console.log(addMoney, addMoneyPin);

})