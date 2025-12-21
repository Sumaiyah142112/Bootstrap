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






function validateBankForm() {
    const name = document.getElementById("name").value.trim();
    const accNo = document.getElementById("account").value.trim();
    const ifsc = document.getElementById("ifsc").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const pin = document.getElementById("pin").value.trim();

    // Name validation
    if (name === "") {
        alert("Name cannot be empty");
        return false;
    }

    // Account number validation (10–16 digits)
    if (!/^\d{10,16}$/.test(accNo)) {
        alert("Invalid account number");
        return false;
    }

    // IFSC validation (example: SBIN0001234)
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc)) {
        alert("Invalid IFSC code");
        return false;
    }

    // Amount validation
    if (amount === "" || isNaN(amount) || Number(amount) <= 0) {
        alert("Enter a valid amount");
        return false;
    }

    // PIN validation (4 digits)
    if (!/^\d{4}$/.test(pin)) {
        alert("PIN must be 4 digits");
        return false;
    }

    // If all validations pass
    return true;

    document.getElementById("popup-overlay").style.display = "none";
}

function validateBankForm() {
    // all validations...

    // if everything is valid
    document.getElementById("popup-overlay").style.display = "none";
}


// 👇 PUT THIS AT THE END (not inside any function)
window.onload = function () {
    document.getElementById("popup-overlay").style.display = "flex";
};