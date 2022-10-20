"use strict";

const totalAmountDisplay = document.getElementById("totalAmount");
const billAmountInput = document.getElementById("billAmountInput");
const tippedAmountDisplay = document.getElementById("tippedAmount");

const calculateTipPercent = (tipPercentage) => {
  const billAmount = Number(billAmountInput.value);
  totalAmountDisplay.textContent = (
    tipPercentage * billAmount +
    billAmount
  ).toFixed(2);
  tippedAmountDisplay.textContent = (tipPercentage * billAmount).toFixed(2);
};

const addCashTip = (tipAmount) => {
  const billAmount = Number(billAmountInput.value);

  totalAmountDisplay.textContent = (tipAmount + billAmount).toFixed(2);
  tippedAmountDisplay.textContent = tipAmount.toFixed(2);
};

function removeHidden() {
  var element = document.getElementById("resultArea");
  element.classList.remove("hidden");
}


//Unrefined Code (Repeating)
/*
const tipAmounts = {
  tenPercent: 0.1,
  fifteenPercent: 0.15,
  twentyPercent: 0.2,
  fiveDollars: 5.0,
  tenDollars: 10.0,
  twentyDollars: 20.0,
};

function calculateTenPercentTip(billAmount) {
  const tenPercentTip = tipAmounts.tenPercent * billAmount;
  return tenPercentTip + billAmount;
}

function calculateFifteenPercentTip(billAmount) {
  const fifteenPercentTip = tipAmounts.fifteenPercent * billAmount;
  return fifteenPercentTip + billAmount;
}

function calculateTwentyPercentTip(billAmount) {
  const fifteenPercentTip = tipAmounts.fifteenPercent * billAmount;
  return fifteenPercentTip + billAmount;
}

function calculateFiveDollarTip(billAmount) {
  const fiveDollarTip = tipAmounts.fiveDollars + billAmount;
  return fiveDollarTip;
}

function calculateTenDollarTip(billAmount) {
  const tenDollarTip = tipAmounts.tenDollars + billAmount;
  return tenDollarTip;
}

function calculateTwentyDollarTip(billAmount) {
  const twentyDollarTip = tipAmounts.twentyDollars + billAmount;
  return twentyDollarTip;
}

*/
