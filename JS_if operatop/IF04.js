// Даны три целых числа. 
// Найти количество положительных чисел в исходном наборе. 

// 1 способо ( if)

var number1 = +prompt('Введите первое число');
var number2 = +prompt('Введите второе число');
var number3 = +prompt('Введите третье число');

if ((number1 > 0) && (number2 > 0) && (number3 > 0)){
    alert( "Колличество положительных чисел 3");
}else if (((number1 > 0) && (number2 > 0)) || ((number1 > 0) && (number3 > 0)) || ((number2 > 0) && (number3 > 0))){
    alert( "Колличество положительных числе 2");
}else if ((number1 > 0) || (number2 > 0) || (number3 > 0)){
    alert(" Колличество положительных числе 1");
}else{
    alert( "Колличество положительных чисел 0");
}

// // 2 способ ( циклы,  массивы, if)

var numbers =[],
sum = 0;
numbers[0] = +prompt("Введите первое число");
numbers[1] = +prompt("Введите второе число");
numbers[2] = +prompt("Введите третье число");

for( var i = 0; i < numbers.length; i++){
    if( numbers[i] > 0){
        sum++;
    }
}
alert ('Количество положительных чисел ' + sum);
