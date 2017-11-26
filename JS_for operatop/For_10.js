// For10. Дано целое число N (>0). Найти сумму 
        // 1 + 1/2 + 1/3 + ... + 1/N (вещественное число). 

        var n = 5,
            sum = 0;

        for (var i = 1; i <= n; i++) {
            var num = parseFloat((1/i).toFixed(3));
            var sum = sum + num;
            console.log('Числа от 1 до 1/N = ' +num);
        };
        console.log('Сумма всех чисел = ' + parseFloat(sum).toFixed(3));

