
export function codificar(pass){
    let datosCodificados = Buffer.from(pass).toString('base64');
    return datosCodificados;
}