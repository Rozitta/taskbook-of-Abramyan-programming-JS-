// #27 Для данного вещественного x найти значение следующей функции f, принимающей значения целого типа: 
    //  0, если x < 0, 
    //  f(x) = 1, если x принадлежит [0,1), [2,3), ... , 
    //  −1, если x принадлежит [1,2), [3,4), ... 

var x = (0.5);
var y = Math.floor(x);

function func(y){

    if(y < 0){
        return (0);
    }else if(y % 2 == 0){
        return (1);
    }else{
        return (-1);
    };
};
console.log (func(y));
