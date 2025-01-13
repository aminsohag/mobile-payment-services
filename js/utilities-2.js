function getInputValue(id){
    const addMoney = document.getElementById(id).value;
    const addMoneyNumber = parseFloat(addMoney)
    return addMoneyNumber;
}

function getTextValue(id){
    const addMoney = document.getElementById(id).innerText;
    const addMoneyNumber = parseFloat(addMoney)
    return addMoneyNumber;
}