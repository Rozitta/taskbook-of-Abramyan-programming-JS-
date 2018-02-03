//    String11.Дана непустая строка S.Вывести строку,содержащую символы строки S, между которыми вставлено по одному пробелу. 

var s = 'string';
var str = ' ';

for (var i = 0; i < s.length; i++) {
    str = str + (s[i] + ' ');

}
console.log(str);