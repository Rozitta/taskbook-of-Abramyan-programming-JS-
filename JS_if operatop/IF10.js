// Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить каждой переменной сумму этих значений, а если равны, то присвоить переменным нулевые значения. Вывести новые значения переменных A и B.

// 1 способ с помошью опреатора if
    var first = +prompt("Введите первое число");
    var second = +prompt("Введите второе число");
    var sum = (first + second);

    if(first !== second){
        console.log (sum);
        console.log (sum);
    } else{
        console.log (first = 0);
        console.log (second = 0);
    }

// 2 способ Тернарный оператор
    var first = +prompt("Введите первое число");
    var second = +prompt("Введите второе число");
    var sum = (first + second);

    first !== second ? console.log (sum) || console.log (sum):
    console.log (first = 0) || console.log (second = 0);


// 3 способ с помошью конструкции switch
    var first = +prompt("Введите первое число");
    var second = +prompt("Введите второе число");
    var sum = (first + second);
    

    switch( x = (first !== second)){
        case true : console.log(sum) || console.log(sum);
        break;
        case false : console.log( first = 0) || console.log(second = 0);
    }
