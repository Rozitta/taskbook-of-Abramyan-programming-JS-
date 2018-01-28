// String8. Дано целое число N (>0) и символ C. Вывести строку длины N, которая состоит из символов C.

var n = 3;
var c = 'f';
var str = '';

for (var i = 1; i <= n; i++ ) {
    str = str + c;
}
console.log(str);