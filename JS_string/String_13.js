// String13. Дана строка. Подсчитать количество содержащихся в ней цифр. 

var str = 'st3456ыыr2in3865g';
var sumNumber = 0;

for (var i = 0; i < str.length; i++) {
    var num = (+str[i]);

    if (isNaN(num) === false) {
        sumNumber++
    }
}
console.log('Количество содержащихся цифер в этой строке = ' + sumNumber);