//step-1 event listener add in button
document.getElementById('btn-deposit').addEventListener('click', function () {

    //step-2 input value
    const textField = document.getElementById('text-field');
    const prevTotalString = textField.value;
    const prevTotal = parseFloat(prevTotalString);
    textField.value = '';

    //step-3 deposit add
    const totalDeposit = document.getElementById('total-deposit');
    const newTotalString = totalDeposit.innerText;
    const newTotal = parseFloat(newTotalString);

    const currentTotalDeposit = prevTotal + newTotal;

    //step-4
    totalDeposit.innerText = currentTotalDeposit;

    //step-5
    const balance = document.getElementById('balance-field');
    const newBalanceString = balance.innerText;
    const newBalance = parseFloat(newBalanceString)

    const totalBalance = newBalance + currentTotalDeposit;
    
    balance.innerText = totalBalance;

}
)