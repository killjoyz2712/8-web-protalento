let varGlobal = 1000;

function saludar(){
    console.log(varGlobal);
}

function sumar(){
    console.log(1 + varGlobal);
    varGlobal = varGlobal + 1;
}

function despedirse(){
    console.log("Adios por "+varGlobal)
}

sumar();
despedirse();
saludar();
console.log(varGlobal)