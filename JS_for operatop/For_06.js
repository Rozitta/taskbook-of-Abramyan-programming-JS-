  // For6. Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1.2, 1.4, ..., 2 кг конфет. 

         var a = 50;

        for(i = 0; i <= 10; i++){
            var b = (1+i/10); 
            console.log("Стоимость " + b + " кг конфет,  будет составлять " + Math.floor(b*a) );   
        }
