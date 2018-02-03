// String18. Дана строка. Преобразовать в ней все строчные буквы (как латинские, так и русские) в прописные, а прописные — в строчные.

var str = 'ЯлюблюjAvAscript',
    strNew = '';

for (var i = 0; i < str.length; i++) {
    if ((str[i] >= String.fromCharCode(65) && str[i] <= String.fromCharCode(90)) || (str[i] >= String.fromCharCode(
            1040) && str[i] <= String.fromCharCode(1071))) {
        strNew += str[i].toLowerCase();
    } else {
        strNew += str[i].toUpperCase();
    }
}
console.log(str);
console.log(strNew);