var money = prompt("Введите Ваш бюджет на месяц?");
console.log(money);

var time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(time);

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

// цикл for
for (var i = 1; i <= 2;) {
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

// var i = 1;

/**
// цикл while
while (i <= 2) {
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
**/

/**
// цикл do ... while
do {
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
while (i <= 2)
**/

appData.moneyPerDay = (+appData.budget)/30;

alert("Бюджет пользователя на один день = " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка!");
}

//тестирование
console.log(appData.expenses);
for (var key in appData.expenses) {
	console.log(key + ' - ' + appData.expenses[key]);
}