//#23 Даны целочисленные координаты трех вершин прямоугольника, стороны которого параллельны координатным осям. Найти координаты его четвертой вершины.

var a = [-3,2],
    b = [2,2],
    c = [2,-1];

    if(a[0] == b[0]){
        console.log("Первая точка координат по оси Х = " + с[0])
    }else if (a[0] == c[0]){
        console.log("Первая точка координат по оси Х = " + b[0])
    }else{
        console.log("Первая точка координат по оси Х = " + a[0])
    }
    if(a[1] == b[1]){
        console.log("Вторая точка координат по оси Y = " + c[1])
    }else if (a[1] == c[1]){
        console.log("Вторая точка координат по оси Y = " + b[1])
    }else{
        console.log("Вторая точка координат по оси Y = " + a[1])
    }