// #24 Для данного вещественного x найти значение следующей функции f, принимающей вещественные значения: f(x) = 2·sin(x), если x > 0, 
                            // 6−x, если x ≤ 0.
var x = -1;

function func(x){
    if(x > 0){
        return 2*Math.sin(x);
    }else{
        var y = (6-x);
        return y;
    };
};

console.log(func(x));