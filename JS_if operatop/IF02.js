// Дано целое число. Если оно является положительным, 
// то прибавить к нему1; в противном случае вычесть из него 2.
// Вывести полученное число. 

// 1 способ (if)
    var number = prompt("Введите целое число");

    if (number >=0) {
        alert(+number + 1);
    }else{
        alert(+number - 2);
    }

// 2 способ (тернарный оператор)
    var number = prompt("Введите целое число");

    number = (number >=0) ? (+number + 1) : (+number - 2);
    alert(number);