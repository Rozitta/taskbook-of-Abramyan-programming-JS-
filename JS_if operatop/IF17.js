// #17. Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по возрастанию или убыванию, то удвоить их; в противном случае заменить значение каждой переменной на противоположное. Вывести новые значения переменных A, B, C.

// 1 способ - оператор if
var first = +prompt("Введите первое чиcло"),
second = +prompt("Введите второе чиcло"),
third = +prompt("Введите третье чиcло");

if((first <= second) && (second <= third) && (first <= third)){
console.log(2*first, 2*second, 2*third);
}else if((first >=second) && (second >= third) && ( first >= third)){
console.log(2*first, 2*second, 2*third);
}else{
console.log(-first, -second, -third);
}

// 2 cпособ  - Тернарный оператор
var first = +prompt("Введите первое чиcло"),
second = +prompt("Введите второе чиcло"),
third = +prompt("Введите третье чиcло");

((first <= second) && (second <= third) && (first <= third)) ? console.log(2*first, 2*second, 2*third):
((first >=second) && (second >= third) && ( first >= third)) ? console.log(2*first, 2*second, 2*third):
console.log(-first, -second, -third);

