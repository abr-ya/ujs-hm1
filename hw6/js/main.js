let start = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value'),
    daybudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),
    yearsavings = document.getElementsByClassName('yearsavings-value'),
    expensesInput = document.getElementsByClassName('expenses-item'),
    btns = document.getElementsByTagName('button'),
    btnUtv1 = btns[0],
    btnUtv2 = btns[1],
    btnRsch = btns[2],
    optionalexpensesInput = document.querySelectorAll('.optionalexpenses-item'),
    incomeIn = document.querySelector('.choose-income'),
    savingsCh = document.querySelector('#savings'), // чекбокс
    sumIn = document.querySelector('#sum'),
    percentIn = document.querySelector('#percent'),
    yearIn = document.querySelector('.year-value'),
    monthIn = document.querySelector('.month-value'),
    dayIn = document.querySelector('.day-value');

// тест
//console.log(btnRsch);
//console.log(optionalexpensesInput);
//console.log(monthIn);