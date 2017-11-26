 // For7. Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.

        var a = 1,
            b = 3,
            sum = 0;

        for( i = a; i <= b; i++){
            sum = sum + i;
        }
        console.log(sum);
