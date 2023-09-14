function suma(a,b){

    a = Number(a); 
    b = Number(b); 
    
    let res = a+b;

    if(isNaN(res)){
        return 0;
    }

    return res;
}

module.exports = suma;