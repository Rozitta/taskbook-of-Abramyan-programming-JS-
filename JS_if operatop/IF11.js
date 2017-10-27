// Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить каждой переменной большее из этих значений, а если равны, то присвоить переменным нулевые значения. Вывести новые значения переменных A и B.

// 1 способ
    var first = +prompt("Введите первое число");
    var second = +prompt("Введите второе число");

    if((first !== second) && (first > second)){
        console.log(first);
        console.log(second = first);
    } else if ((first !== second) && (first < second)){
        console.log(second);
        console.log(first = second);
    }else {
        console.log(first = 0);
        console.log(second = 0);
    }


// 2 способ
    var first = +prompt("Введите первое число");
    var second = +prompt("Введите второе число");
    
    ((first !== second) && (first > second)) ? console.log(first) || console.log(second = first):
    ((first !== second) && (first < second)) ? console.log(second) || console.log(first = second):
    console.log(first = 0) || console.log(second = 0);