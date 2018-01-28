 // String10◦. Дана строка. Вывести строку, содержащую те же символы, но расположенные в обратном порядке. 

 var str = 'string';
 var i = 0;
 var lenght = str.length;
 var word = '';

 while (lenght > i) {
     lenght--
     word = word + str[lenght];
 }
 console.log(word);