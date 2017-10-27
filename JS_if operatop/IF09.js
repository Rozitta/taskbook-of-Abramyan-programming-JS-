// Даны две переменные вещественного типа: A, B. Перераспределить значения данных переменных так, чтобы в A оказалось меньшее из значений, а в B — большее. Вывести новые значения переменных A и B.

var less = +prompt("Введите первое число");
var more = +prompt("Введите второе число");

if (less > more) {
    less = (less + more);
    more = (less - more);
    less = (less - more);
    alert(less);
    alert(more);
} else {
    alert(less);
    alert(more);
}