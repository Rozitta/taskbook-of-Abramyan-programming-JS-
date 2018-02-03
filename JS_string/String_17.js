 // String17. Дана строка. Преобразовать в ней все строчные буквы (как латинские, так и русские) в прописные

 var str = 'яЛюблюJavaScript';
 var newStr = '';

 for (var i = 0; i < str.length; i++) {
     newStr += str[i].toUpperCase();
 }

 console.log(newStr);