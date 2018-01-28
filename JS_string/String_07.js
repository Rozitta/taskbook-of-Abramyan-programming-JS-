// String7.Дана непустая строка. Вывести коды ее первого и последнего символа. 

var str = 'string';
var lastLetter = str.slice(-1);
console.log('Код первого символа = ' + str.charCodeAt(0));
console.log('Код последнего символа = ' + lastLetter.charCodeAt(0));