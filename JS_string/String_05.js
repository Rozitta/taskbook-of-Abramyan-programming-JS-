// String5. Дано целое число N (1≤N ≤26). Вывести N последних строчных (то есть маленьких) букв латинского алфавита в обратном порядке (начиная с буквы «z»). 

var n = 5;
var str = "abcdefghijklmnopqrstuvwxyz"
var i = 25;
var b = (i - n);

while (i > b) {
    console.log(str[i])
    i--
}