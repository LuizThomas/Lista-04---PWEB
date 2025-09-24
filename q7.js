const rs = require('readline-sync');

const n1 = parseFloat(rs.question("Digite o primeiro número: "));
const n2 = parseFloat(rs.question("Digite o segundo número: "));
const n3 = parseFloat(rs.question("Digite o terceiro número: "));

let maior;

if (n1 >= n2 && n1 >= n3) {
  maior = n1;
} else if (n2 >= n1 && n2 >= n3) {
  maior = n2;
} else {
  maior = n3;
}

console.log("O maior número é: " + maior);
