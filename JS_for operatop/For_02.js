// For2. Даны два целых числа A и B (A < B). Вывести в порядке возрастания все целые числа, расположенные между A и B (включая сами числа A и B), а также количество N этих чисел. 

var A = 1,
    B = 15;
    N = 0;

for(i = A; i <= B; i++){
    console.log(i);
    N++ //счетчик кл-во чисел, которые выводятся от A до B;
}
console.log("Общее количество чисел составило " + N);