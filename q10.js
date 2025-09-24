const rs = require('readline-sync');

const ano = parseInt(rs.question("Digite um ano: "));

if (ano % 4 === 0) {
  if (ano % 100 !== 0 || ano % 400 === 0) {
    console.log(ano + " é bissexto.");
  } else {
    console.log(ano + " não é bissexto.");
  }
} else {
  console.log(ano + " não é bissexto.");
}
