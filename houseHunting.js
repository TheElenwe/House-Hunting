const readlineSync = require("readline-sync");
annualSalary=readlineSync.question("Salary: ");
portionSaved = readlineSync.question("Enter the amount to be saved each month as ratio (example: 0.1 for 10%) ");
totalCost = readlineSync.question("Cost of the house:");
portionDownPayment = totalCost * 0.25;
currentSavings = 0;
rate = 0.04;
numberOfMonths = 0;

while (currentSavings <= portionDownPayment) {
  currentSavings += (annualSalary * portionSaved) / 12;
  currentSavings += (currentSavings * rate) / 12;
  numberOfMonths +=1
}

console.log("It takes:",numberOfMonths, "Months to by it") 