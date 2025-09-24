const rs = require('readline-sync');

const num = parseInt(rs.question("Digite um número: "));

if (num % 2 === 0) {
    console.log("É par.");
} else {
    console.log("É ímpar.");
}
