// String15. Дана строка. Подсчитать общее количество содержащихся в ней строчных латинских и русских букв

var str = 'HellohПриВет';
countlat = 0;
countRus = 0;
countAll = 0;

for (var i = 0; i < str.length; i++) {
    if (str[i] >= String.fromCharCode(97) && str[i] <= String.fromCharCode(122)) {
        countlat++
    } else if (str[i] >= String.fromCharCode(1072) && str[i] <= String.fromCharCode(1103)) {
        countRus++
    }
    countAll = countRus + countlat;
}
console.log('\n Количество строчных латинских букв = ' + countlat + '\n Количество строчных русских букв = ' +
    countRus + '\n Общее кл-во латинских и русских строчных букв = ' + countAll);