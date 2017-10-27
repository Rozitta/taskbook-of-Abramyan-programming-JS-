// Даны три числа. Найти среднее из них (то есть число, расположенное между наименьшим и наибольшим). 

var a = +prompt("Введите первое число");
var b = +prompt("Введите второе число");
var c = +prompt("Введите третье число");

    if((a > c) && (a > b)){
        if(c > b){
            console.log(c);
        }else{
            console.log(b);
        }
    }else if((b > a) && (b > c)){
        if(a > c){
            console.log(a);
        }else{
            console.log(c);
        }
    }else if((c > a) && (c > b)){
        if(a > b){
            console.log(a);
        }else{
            console.log(b);
        }
    }