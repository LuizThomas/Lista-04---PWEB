const rs = require('readline-sync');

const n1 = parseInt(rs.question("Digite um número: "));
const n2 = parseInt(rs.question("Digite um segundo número: "));
const op = parseInt(rs.question("Digite a operação desejada: \n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n"));

switch (op) {
    case 1:
        console.log("Resultado da adição:", n1 + n2);
        break;
    case 2: 
        console.log("Resultado da subtração:", n1 - n2);
        break;
    case 3:
        console.log("Resultado da multiplicação:", n1 * n2);
        break;
    case 4:
        console.log("Resultado da divisão:", n1 / n2);
        break;
    default:
        console.log("Operação inválida. Escolha um número entre 1 e 4.");
}
