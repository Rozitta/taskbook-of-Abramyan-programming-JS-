// #26 Для данного вещественного x найти значение следующей функции f, принимающей вещественные значения: −x, если x ≤ 0,
               // f (x) = x2, если 0 < x < 2, 
               // 4, если x ≥ 2.

var x = 6;

function func(x){
    if(x <= 0){
        return (-x);
    }else if ((x > 0) && (x < 2)){
        return (Math.pow(x, 2));
    }else {
        return (4);
    }
}

console.log (func(x));