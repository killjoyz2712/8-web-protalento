const x = 9;

function scopeLocal(){
    const x=100;
    console.log(x);
}

scopeLocal();
console.log(x);  //¿Que va a imprimr?