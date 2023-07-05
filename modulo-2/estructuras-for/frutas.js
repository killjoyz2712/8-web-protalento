let frutas = ["manzana","piña","uva","melon","pera", "limon"];

console.log(frutas.length)

for(let i=0;  i<frutas.length ; i++){
    console.log(frutas[i]);
}

for(let i=frutas.length - 1;  i>=0 ; i--){
    console.log(frutas[i]);
}

let i=0;
for(;i<frutas.length;){
    console.log(frutas[i]);
    i++;
}