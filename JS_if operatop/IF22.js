// #22◦. Даны координаты точки, не лежащей на координатных осях OX и OY. Определить номер координатной четверти, в которой находится данная точка.

// 1 способ
var x = +prompt("Введите точку координата на оси х"),
y = +prompt("Введите точку координата на оси y");

if((x > 0) && (y > 0)){
console.log("Номер координатной четверти 1");
}else if ((x < 0) && (y > 0)){
console.log("Номер координатной четверти 2");
}else if ((x < 0) && (y < 0)){
console.log("Номер координатной четверти 3");
}else if ((x > 0) && (y < 0)){
console.log("Номер координатной четверти 4");
}else{
console.log("Введите координаты не лежащие на координатных осях OX и OY");
}
