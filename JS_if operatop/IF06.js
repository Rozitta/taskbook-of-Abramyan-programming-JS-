// Даны два числа. Вывести большее из них.

//  1 способ (оператор if)
var num1 = +prompt('Введите первое число');
var num2 = +prompt('Введите втрое число');

if( num1 > num2){
    alert( "Большее число " + num1);
}else if( num2 > num1){
    alert( "Большее число " + num2);
} else{
    alert("Числа равны");
}

// 2 способ (Тернарный оператор)
var num1 = +prompt('Введите первое число');
var num2 = +prompt('Введите втрое число');

(num1 > num2) ? alert( "Большее число " + num1):
( num2 > num1) ? alert( "Большее число " + num2):
alert("Числа равны");