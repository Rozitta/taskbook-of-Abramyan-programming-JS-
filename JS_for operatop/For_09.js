 // For9. Даны два целых числа A и B (A < B). Найти сумму квадратов всех целых чисел от A до B включительно. 

        // 1 способ с посошь. метода Math.pow
        var a = 1,
            b = 3,
            sum = 0;

        for(i = a; i <= b; i++){
        var pow =  Math.pow(i,2);
        var sum = sum + pow;
        console.log('Квадрат от числа '+ i + " равняется " + pow);
        }
        console.log("Сумма квадрата всех чисел равняется "+ sum );

        // 2 способ без всяких методов 
        var a = 5,
            b = 10,
            sum = 0;

        for (i = a; i <= b; i++) {
            var c = i * i;
            var sum = sum + c;
            console.log("Квадрат от числа " + i + " равняется " + c);
        }
        console.log("Сумма квадрата всех чисел равняется " + sum);