// String16. Дана строка. Преобразовать в ней все прописные латинские буквы в строчные. 

var str = 'ПриветJavaScript';
var strNew = '';

for (var i = 0; i < str.length; i++) {
    if (str[i] >= String.fromCharCode(65) && str[i] <= String.fromCharCode(90)) {
        strNew += str[i].toLowerCase();
    } else {
        strNew += str[i];
    }
}
console.log(strNew);