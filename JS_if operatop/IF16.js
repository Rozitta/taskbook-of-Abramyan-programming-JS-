// #16 Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по возрастанию, то удвоить их; в противном случае заменить значение каждой переменной на противоположное. Вывести новые значения переменных A, B, C. 

// 1 способ  - оператор if
var first = +prompt("Введите первое число"),
    second = +prompt("Введите второе число"),
    third = +prompt("Введите третье число");

if((first <= second) && (second <= third) && (first <= third)){
    console.log(2*first, 2*second, 2*third);
}else{
    console.log(-first, -second, -third);
}

// 2 способ - Тернарный оператор
var first = +prompt("Введите первое число"),
    second = +prompt("Введите второе число"),
    third = +prompt("Введите третье число");

((first <= second) && (second <= third) && (first <= third)) ? console.log(2*first, 2*second, 2*third):
console.log(-first, -second, -third);