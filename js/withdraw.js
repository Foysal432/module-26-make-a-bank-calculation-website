/**
 * step-1: add event handler with the withdraw button
 * step-2: get the withdraw amount from the withdraw input
 * step-2.5: also make sure to convert the input into a number by using parseFloat 
 * step-3:get previous withdraw
 * step-4:calculate total withdraw amount
 * step-4.5: set total withdraw amount
 * step-5 :get the previous balance total
 * step-6 :calculate new balance total
 * step-6.5 : set the new balance total
 *  */ 

// step-1

document.getElementById('btn-withdraw').addEventListener('click',function(){
// step-2
const withdrawField = document.getElementById('withdraw-input')
const withdrawFieldString = withdrawField.value;
// step-2.5
const newWithdrawFiledAmount = parseFloat(withdrawFieldString);
// step-3
const getPreviousWithdrawElement = document.getElementById('withdraw-amount');
const getPreviousWithdrawString = getPreviousWithdrawElement.innerText;
const getPreviousWithdraw = parseFloat(getPreviousWithdrawString);
// step-4
const newTotalWithdraw = getPreviousWithdraw + newWithdrawFiledAmount;
// step-4.5
getPreviousWithdrawElement.innerText = newTotalWithdraw;

// step-5
const totalBalanceElement = document.getElementById('balance-total');
const TotalBalanceString = totalBalanceElement.innerText;
const totaPreviouslBalance = parseFloat(TotalBalanceString);
// step-6
const currentBalance = totaPreviouslBalance - newTotalWithdraw;
totalBalanceElement.innerText = currentBalance
// step-7: clear the input field
withdrawField.value =''
})