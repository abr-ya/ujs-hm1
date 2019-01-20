let money, time;

function start() {
    money = +prompt("Введите Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Введите Ваш бюджет на месяц?");
    }
}

start(); // функция опрашивает пользователя и берет у него первичные данные

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    chooseExpenses: function() {
        for (let i = 1; i <= 2;) {
            var temp1 = prompt("Введите обязательную статью расходов в этом месяце");
            var temp2 = prompt("Во сколько обойдется?");

            if ((typeof(temp1) === 'string') && (typeof(temp1) != null) && (typeof(temp2) != null)
            && (temp1 != '') && (temp2 != '') && (temp1.length < 50) && (temp2.length < 50)) {
                appData.expenses[temp1] = temp2;
                i++;
            } else {
                alert("Данные не прошли проверку!");
            }
        }
    },

    detectDayBudget: function() {
        appData.moneyPerDay = ((appData.budget)/30).toFixed(2);
        alert("Бюджет пользователя на один день = " + appData.moneyPerDay);
    },

    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка!");
        }
    },

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
        }
    },

    chooseIncome: function() {
        let items; 
        items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
        while((typeof(items) !== 'string') || (typeof(items) == null) || (items == '')) {
            items = prompt('Что принесет дополнительный доход? (перечислите через запятую, не оставляйте строку пустой, не отменяйте этот диалог!)', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может, что-то ещё?"));
        appData.income.sort();
    }
};

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

//chooseExpenses();
//detectDayBudget();
//detectLevel();
//checkSavings();
//chooseOptExpenses();

/*
//тестирование
console.log(appData.expenses);
for (var key in appData.expenses) {
	console.log(key + ' - ' + appData.expenses[key]);
}
*/