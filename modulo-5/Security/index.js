import { hashear } from "./Hash.js";
import { encriptar, desencriptar} from "./Encrypt.js";
import { codificar } from "./Encoding.js";
let resultado = hashear("password12318/09/2023");
let encriptado = encriptar("perrito123");

let desencriptado = desencriptar(encriptado);

let codificado = codificar("password123");
console.log(codificado)

