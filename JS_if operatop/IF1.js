// Дано целое число. Если оно является положительным, то прибавить к нему 1; 
// в противном случае не изменять его. Вывести полученное число.

// 1 вариант решения с помошью if
    var number = prompt("Введите число");

    if(number >= 0){
        alert(+number+1);
    }else{
        alert(+number);
    }

// 2 вариант решения с помошью тернарного оператора
    var number = prompt("Введите число");
    number = (number >= 0) ? (+number+1) : (+number);
    alert(number);