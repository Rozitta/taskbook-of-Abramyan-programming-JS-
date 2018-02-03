// String14. Дана строка. Подсчитать количество содержащихся в ней прописных латинских букв. 

var str = 'strDHLапDSin34g';
countLetter = 0;

for (var i = 0; i < str.length; i++) {
    if ((str[i] >= String.fromCharCode(65)) && (str[i] <= String.fromCharCode(90))) {
        countLetter++;
    }
}
console.log(countLetter);