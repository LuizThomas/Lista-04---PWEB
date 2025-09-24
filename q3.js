const rs = require('readline-sync');

const c = parseFloat(rs.question("Digite um valor em celsius para ser transformado: "));
const f = parseFloat(rs.question("Digite um valor em fahrenheit para ser transformado: "));

const cResultado = (f - 32)/ 1.8;
const fResultado = c * 1.8 + 32;

console.log("Os dois valores transformados viram: " + cResultado + "° Celsius e " + fResultado + "° Fahrenheit.");