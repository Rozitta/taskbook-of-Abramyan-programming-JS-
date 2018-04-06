// Begin3◦. Даны стороны прямоугольника a и b. Найти его площадь S = a·b и периметр P = 2·(a + b)

//площадь прямоугольника
function rectangleSquare(a,b){
  var s = a*b;
  return s;
}

console.log(rectangleSquare(2,3));

//периметр прямоугольника

function rectanglePerimeter(a,b){
  var p = 2*(a+b);
  return p;
}

console.log(rectanglePerimeter(2,3));