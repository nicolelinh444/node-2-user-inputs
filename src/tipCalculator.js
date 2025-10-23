// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js

let bill = Number(process.argv[2]);
let tipPercentage = Number(process.argv[3]);
let numGuests = Number(process.argv[4]);

// we want to calculate 3 values: tip amount, total bill, and the total for each guest

// calculate the tip amount
let tipAmount = bill * tipPercentage;
console.log("Total tip amount", tipAmount);

// calculate the total bill
let totalBill = bill + tipAmount;
console.log("Total bill:", totalBill);

// calculate the total for each guest
let amountOwedPerGuest = totalBill / numGuests;
console.log("Amount owed per guest:", amountOwedPerGuest);