// Даны три целых числа. 
// Найти количество положительных и количество отрицательных чисел в исходном наборе. 

//  способ №1 (Массив,  цикл,  условие)

var num = [],
    sum = 0,
    negative = 0;

num[0] = +prompt("Введите первое число");
num[1] = +prompt("Введите второе число");
num[2] = +prompt("Введите третье число");

for (var i = 0; i <= num.length; i++){
    if ( num[i] > 0 ){
        sum++;
    }
    if( num[i] < 0){
        negative++;
    }
}
alert('Количество полжительных чисел ' + sum);
alert('Количество отрицательных чисел ' + negative);

