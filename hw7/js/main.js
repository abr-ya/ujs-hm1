let start = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],
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

let money, time;

start.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Введите Ваш бюджет на месяц?");
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Введите Ваш бюджет на месяц?");
    }

    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();

    var timeUp = new Date(Date.parse(time));
    yearIn.value = timeUp.getFullYear();
    monthIn.value = timeUp.getMonth() + 1;
    dayIn.value = timeUp.getDate();

    // включим кнопки
    btnUtv1.disabled = false;
    btnUtv2.disabled = false;
    btnRsch.disabled = false;
});

//console.log(expensesInput);
//console.log(typeof(expensesInput));

// отключим кнопки
// хорошо бы на это стили дописать! upd: дописал
btnUtv1.disabled = true;
btnUtv2.disabled = true;
btnRsch.disabled = true;

btnUtv1.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesInput.length; i = i + 2) {
        var temp1 = expensesInput[i].value;
        var temp2 = expensesInput[i + 1].value;
        
        // проверки обновил, но достаточно ли их?
        if ((temp1 != '') && (temp2 != '')) {
            appData.expenses[temp1] = temp2;
            sum += +temp2;
        } else {
            alert("Что-то не заполнено в расходах! Строка не будет учтена!");
            continue;
        }
    }

    expenses.textContent = sum;


});

btnUtv2.addEventListener('click', function() {
    for (let i = 0; i < optionalexpensesInput.length; i++) {
        appData.optionalExpenses[i] = optionalexpensesInput[i].value;
        optionalexpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnRsch.addEventListener('click', function() {
    if (appData.budget != undefined) {
        // обязательные траты вычитаются из бюджета после их утверждения
        appData.moneyPerDay = ((appData.budget - expenses.textContent)/30).toFixed(2);
        daybudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            level.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            level.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            level.textContent = "Высокий уровень достатка";
        } else {
            level.textContent = "Произошла ошибка!";
        }
    } else {
        daybudget.textContent = "Произошла ошибка!";
    }
});

incomeIn.addEventListener('input', function() {
    items = incomeIn.value;
    appData.income = items.split(', ');
    income.textContent = appData.income;
});

savingsCh.addEventListener('click', function() {
    appData.savings = !appData.savings;
    //console.log(appData.savings);
});

//sumIn, percentIn
//monthsavings, yearsavings 

sumIn.addEventListener('input', function() {
    if (appData.savings == true ) {
        let sum = +sumIn.value,
            percent = +percentIn.value;

        appData.monthIncome = sum / 100 / 12 * percent; 
        
        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = (appData.monthIncome * 12).toFixed(1);
    }
});

percentIn.addEventListener('input', function() {
    if (appData.savings == true ) {
        let sum = +sumIn.value,
            percent = +percentIn.value;

        appData.monthIncome = sum / 100 / 12 * percent; 
        
        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = (appData.monthIncome * 12).toFixed(1);
    }
});

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

/***
appData.chooseIncome();

let message = '';
appData.income.forEach(function(item, i, mass) {
	message += (i+1 + ': ' + item + '\n');
});
alert("Способы доп. заработка: \n" + message);

console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
    console.log(key + '\n');
}
***/