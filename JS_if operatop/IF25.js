// №25 Для данного целого x найти значение следующей функции f, принимающей значения целого типа: f(x) = 2·x, если x < −2 или x > 2, 
        // −3·x, в противном случае.

var x = -5;

function func(x){
    if((x < -2) || (x > 2)){
        return (2*x);
    }else{
        return (-3*x);
    };
};

console.log(func(x));
