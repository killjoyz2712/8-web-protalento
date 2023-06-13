var a = 5;
var b = 5;
var c = 7;
var d = 8;
var e = 9;
var f = 15;

var res = a==b;
var res1 = a==c;
var res2 = 1.9==2;
console.log(res)
console.log(res1)
console.log("Este es el resultado: "+res2)

Math.round(1.5) //2
Math.floor(1.5) //1
Math.ceil(1.5) //2

var identicos = "Hola" === 'Hola';
console.log("Valores identicos: "+identicos)

identicos = true === false;
console.log("Valores identicos: "+identicos)

identicos = "Holas" !== "Hola";
console.log("Valores no identicos: "+identicos)

identicos = a !== b;
console.log("Valores numericos no identicos: "+identicos)


var mayores_menores = f>a; //Si
var menores_mayores = a<f; //Si
var aclaracion = a<a;
var mayor_cadena = "Ho" > "AdiosAAAA";
console.log("Mayor que: "+mayores_menores)
console.log("Menor que: "+menores_mayores)
console.log("Algo raro: "+aclaracion)
console.log("Mayor que cadena: "+mayor_cadena)

aclaracion = c<=b;
aclaracion = c>=b;
console.log("Algo raro: "+ aclaracion)

var fecha = new Date("2001-05-05");
console.log(fecha)


