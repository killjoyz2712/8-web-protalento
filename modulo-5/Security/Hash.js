// Algoritmos de Hashing MD5, SHA-256 , SHA-1

import crypto from 'crypto';

export function hashear(pass){
    let hash = crypto.createHash('sha256').update(pass).digest('hex');
    return hash;
}