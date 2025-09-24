const rs = require('readline-sync');

const n = parseFloat(rs.question("Digite um número: "));

switch (true) {
    case (n >= 9 && n <= 10):
        console.log("Sua nota foi A.")
    break;
    case (n >= 7 && n <= 8):
        console.log("Sua nota foi B.")
    break;
    case (n >= 5 && n <= 6):
        console.log("Sua nota foi C.")
    break;
    case (n >= 3 && n <= 4):
        console.log("Sua nota foi D.")
    break;
    case (n >= 2 && n <= 0):
        console.log("Sua nota foi E.")
    break;
    default:
        console.log("Nota inválida.")
    break;
}