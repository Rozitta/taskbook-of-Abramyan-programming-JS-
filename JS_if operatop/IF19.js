
// #19. Даны четыре целых числа, одно из которых отлично от трех других, равных между собой. Определить порядковый номер числа, отличного от остальных

// 1 способ (if)
var a = 2,
    b = 1,
    c = 1,
    d = 1;

if ((a == b) && (a == c)){
    console.log(4);
}else if ((b == c) && (b == d)){
    console.log(1);
}else if((c == d) && (c == a)){
    console.log(2);
}else {
    console.log(3);
}

// 2 способ (Тернарный оператор)
var a = 1,
    b = 2,
    c = 1,
    d = 1;

((a == b) && (a == c)) ? console.log(4):
((b == c) && (b == d)) ? console.log(1):
((c == d) && (c == a)) ? console.log(2):
console.log(3);