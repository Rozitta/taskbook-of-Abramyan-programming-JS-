// Даны три числа. Найти наименьшее из них.

// 1 способ
    var first = +prompt("Введите первое число");
    var second = +prompt("Введите второе число");
    var third = +prompt("Введите третье число");

    if((first < second) && (first < third)){
        console.log(first);
    }else if((second < first) && (second < third)){
        console.log(second);
    }else{
        console.log(third);
    }

// 2 способ с помошью Тернарного оператора

    var first = +prompt("Введите первое число");
    var second = +prompt("Введите второе число");
    var third = +prompt("Введите третье число");

    ((first < second) && (first < third)) ? console.log(first):
    ((second < first) && (second < third)) ? console.log(second):
    console.log(third);
