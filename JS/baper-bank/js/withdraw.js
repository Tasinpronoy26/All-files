//step-1 

document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step-2 

    const withdrawInputField = document.getElementById('withdraw-input-field');
    const withdrawInputFieldString = withdrawInputField.value;
    const newWithdraw = parseFloat(withdrawInputFieldString)

    withdrawInputField.value = '';



    // step-3

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.innerText;
    const prevWithdrawField = parseFloat(withdrawFieldString);

    currentTotalWithdraw = newWithdraw + prevWithdrawField;

    withdrawField.innerText = currentTotalWithdraw;

    // step-4

    const balanceString = document.getElementById('balance-field');
    const prevBalanceString = balanceString.innerText;
    prevBalanceTotal = parseFloat(prevBalanceString);

    currentNewBalance = prevBalanceTotal - currentTotalWithdraw ;

    balanceString.innerText = currentNewBalance;


})