let balanceEl = document.querySelector(".balance-card .amount");
let incomeEl = document.querySelector(".income-card .amount");
let expenseEl = document.querySelector(".expense-card .amount");

let addIncomeBtn = document.querySelector(".add-income");
let addExpenseBtn = document.querySelector(".add-expense");

let resetIncomeBtn = document.querySelector(".reset-income");
let resetExpenseBtn = document.querySelector(".reset-expense");

// Values
let totalBalance = 0;
let lastIncome = 0;
let lastExpense = 0;

function updateUI() {
    balanceEl.textContent = "$" + totalBalance.toFixed(2);
    incomeEl.textContent = "$" + lastIncome.toFixed(2);
    expenseEl.textContent = "$" + lastExpense.toFixed(2);
}

// Add Income
addIncomeBtn.addEventListener("click", function () {
    let amount = prompt("Enter income amount:");
    amount = Number(amount);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    totalBalance += amount;
    lastIncome += amount;

    updateUI();
});

// Add Expense
addExpenseBtn.addEventListener("click", function () {
    let amount = prompt("Enter expense amount:");
    amount = Number(amount);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    totalBalance -= amount;
    lastExpense += amount;

    updateUI();
});

// RESET Income
resetIncomeBtn.addEventListener("click", function () {
    totalBalance -= lastIncome; // remove income from balance
    lastIncome = 0;

    updateUI();
});

// RESET Expense
resetExpenseBtn.addEventListener("click", function () {
    totalBalance += lastExpense; // add back expense to balance
    lastExpense = 0;

    updateUI();
});