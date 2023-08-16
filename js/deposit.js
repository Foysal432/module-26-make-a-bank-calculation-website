document.getElementById('btn-deposit').addEventListener('click',function(){
const depositField = document.getElementById('deposit-input');
const NewdepositAmountString = depositField.value;
const newDepositAmount = parseFloat(NewdepositAmountString);
// step-7 clear the deposit filed
 depositField.value ='';
if (isNaN(newDepositAmount)) {
    alert('please provide a valid ')
    return;
}

const depositTotalAmount = document.getElementById('deposit-amount');
const previousdepositTotalString = depositTotalAmount.innerText
const previousdepositeTotal = parseFloat(previousdepositTotalString);

// step-4 : add numbers to set the total string
const currentDepositTotal = previousdepositeTotal + newDepositAmount;
depositTotalAmount.innerText = currentDepositTotal
// step-5 : calculate current total amount
const totalBalanceElement = document.getElementById('balance-total')
const TotalBalanceString = totalBalanceElement.innerText
const previousTotalBalance = parseFloat(TotalBalanceString);

// step-6 : calculate current total
const currentTotalBalance = previousTotalBalance + currentDepositTotal;
// set the balance
totalBalanceElement.innerText = currentTotalBalance;


})