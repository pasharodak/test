var budzhet = prompt("Ваш бюджет на месяц?");
var datat = prompt("Введите дату в формате YYYY-MM-DD") ;
var first = prompt("Введите обязательную статью расходов");
var second = prompt("Стоимость данной статьи");
var apData = {
    kapital: budzhet,
    timeData:datat,
    expenses:{ Статья_расходов : second,
    стоимость : first
    },
    optionalExpenses:{},
    incom:[],
    savings:false
};
var BudzhetDay;
BudzhetDay = (budzhet-second)/30;
document.write("Бюджет на "+ apData.timeData+"<br>");
document.writeln("При бюджете на месяц : " + apData.kapital +" рублей и Обязательной статьёй расхода стоимостью: " + second + " рублей");
document.writeln("<br>"+"Ваш бюджет на один день: " + BudzhetDay + " рублей");
