// Дано целое число. Если оно является положительным, то прибавить к нему 1; 
// в противном случае не изменять его. Вывести полученное число.

var number = prompt("Введите число");

if(number >= 0){
    alert(+number+1);
}else{
    alert(+number);
}