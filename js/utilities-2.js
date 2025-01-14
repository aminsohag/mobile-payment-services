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

function showSection(id){
    // hide all the section
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('tran-section').classList.add('hidden');

    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}