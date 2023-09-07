//AES, DES 

import crypto from 'crypto';

export function encriptar(pass){
    let encriptacion = crypto.createCipher('aes-256-cbc','robertoRomero')
    let datosEncriptados = encriptacion.update(pass,'utf8','hex');
    datosEncriptados += encriptacion.final('hex')
    return datosEncriptados; 
}


export function desencriptar(pass){
    let desencriptacion = crypto.createDecipher('aes-256-cbc','robertoRomero')
    let datosDesencriptados = desencriptacion.update(pass,'hex','utf8');
    datosDesencriptados += desencriptacion.final('utf8')
    return datosDesencriptados; 
}
