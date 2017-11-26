 // For8. Даны два целых числа A и B (A < B). Найти произведение всех целых чисел от A до B включительно. 

        var a = 5,
            b = 7,
            product = 1;


        for(i = a; i <= b; i++){
            product = product*i;
        }
        console.log(product);