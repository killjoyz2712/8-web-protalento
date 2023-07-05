const falsy = null; // 0, undefined, null, NaN, '', false
const truthy = []; // {}, [], "false", "0", 42, true

if(falsy){
    console.log("Verdadero")
}else{
    console.log("Falso")
}