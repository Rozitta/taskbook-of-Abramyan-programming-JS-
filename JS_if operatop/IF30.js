// If30. Дано целое число, лежащее в диапазоне 1–999. Вывести его строкуописание вида «четное двузначное число», «нечетное трехзначное число» и т.д.

var num = +prompt("Введите число от 1 до 999");

if((num >= 1) && (num < 10) && (num % 2 == 0)){
    console.log("четное однозначное число");
}else if ((num >= 1) && (num < 10) && (num % 2 !== 0)){
    console.log("нечетное однозначное число");
}else if ((num >= 10) && (num < 100) && (num % 2 == 0)){
    console.log("четное двузначное число");
}else if ((num >= 10) && (num < 100) && (num % 2 !== 0)){
    console.log("нечетное двузначное число");
}else if ((num >= 100) && (num < 1000) && (num % 2 == 0)){
    console.log("четное трехначное число");
}else {
    console.log("нечетное трехначное число");
};
