// Даны три числа. Вывести вначале наименьшее, а затем наибольшее из данных чисел.

var first = +prompt("Введите первое число");
var second = +prompt("Введите второе число");
var third = +prompt("Введите третье число");

if((first > second) && (first > third)){
    if(second > third){
        console.log(third, first);
    }else{
        console.log(second, first);
    }
}else if((second > first) && (second > third)){
    if(first > third){
        console.log(third, second);
    }else{
        console.log(first, second);
    }
}else if((third > first) && (third > second)){
    if(first > second){
        console.log(second, third);
    }else{
        console.log( first, third);
    }
}