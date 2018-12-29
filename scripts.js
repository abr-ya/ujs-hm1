// console.log(42);

var money = prompt("Введите Ваш бюджет на месяц?");
console.log(money);

var time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(time);

var appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (i = 1; i <= 2; i++) {
    var temp1 = prompt("Введите обязательную статью расходов в этом месяце");
    var temp2 = prompt("Во сколько обойдется?");
    appData.expenses[temp1] = temp2;
}

//тестирование
console.log(appData.expenses);
for (var key in appData.expenses) {
	console.log(key + ' - ' + appData.expenses[key]);
}


alert("бюджет пользователя на один день = " + (+money)/30);