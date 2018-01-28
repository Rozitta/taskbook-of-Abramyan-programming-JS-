// String6. Дан символ C, изображающий цифру или букву (латинскую или русскую). Если C изображает цифру, то вывести строку «digit», если латинскую букву — вывести строку «lat», если русскую — вывести строку «rus».

var c = 7;

if ("number" === typeof c) {
    console.log("digit");
} else if ("string" === typeof c) {
    var unitCode = c.charCodeAt(0);
    if (unitCode >= 65 && unitCode <= 122) {
        console.log("lat");
    } else if (unitCode >= 1040 && unitCode <= 1103) {
        console.log("rus");
    } else {
        console.log("Этот символ не входи в условие задачи");
    }
}