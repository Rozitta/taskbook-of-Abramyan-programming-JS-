// Дано целое число. Если оно является положительным, то прибавить к нему 1; 
// если отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. 
// Вывести полученное число. 

// 1 способ (if)
var number = +prompt('Введите целое число');

   if (number > 0){
       alert(number + 1);
   }else if  (number < 0){
       alert(number - 2);
   }else{
       alert (number +10);
   }

//    2 способ (тернарный оператор)
var number = +prompt('Введите целое число');
   
    number = (number > 0) ? alert(number + 1) :
    (number === 0) ? alert (number +10):
    alert(number - 2) ;