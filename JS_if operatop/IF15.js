// Даны три числа. Найти сумму двух наибольших из них.

    var first = +prompt("Введите первое число");
    var second = +prompt("Введите второе число");
    var third = +prompt("Введите третье число");

    if((first <= second) && (first <= third)){
        console.log(second + third);
    }else if ((second <= first) && (second <= third)){
        console.log(first + third);
    }else if((third <= first) && (third <= second)){
        console.log(second + first);
    }else{
        console.log("Введите числа");
    }