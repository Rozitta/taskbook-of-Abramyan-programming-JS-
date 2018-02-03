// String12. Дана непустая строка S и целое число N (>0). Вывести строку, содержащую символы строки S, между которыми вставлено по N символов «*» (звездочка).

var s = 'string';
var n = 8;
var str = '';
var b = '';

for (var c = 1; c <= n; c++) {
    b += '*';
}
for (var i = 0; i < s.length; i++) {
    str += (s[i] + b);
}
console.log(str);