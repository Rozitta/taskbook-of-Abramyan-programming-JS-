// Даны два числа. Вывести вначале большее, а затем меньшее из них.

// 1 способ (оператор if)
var num1 = +prompt("Введите первое число"),
    num2 = +prompt("Введите второе число");

if (num1 > num2){
    alert("Большее число " + num1);
    alert("Меньшее число " + num2);
}else if (num2 > num1){
    alert("Большее число " + num2);
    alert("Меньшее число " + num1);
}else{
    alert("Числа равны");
}

// 2 способ (Тернарный оператор)
var num1 = +prompt("Введите первое число"),
    num2 = +prompt("Введите второе число");

(num1 > num2) ? alert("Большее число " + num1) || alert("Меньшее число " + num2):
(num2 > num1) ? alert("Большее число " + num2) || alert("Меньшее число " + num1):
alert("Числа равны");