const rs = require('readline-sync');

const tipo = rs.question("Digite o tipo de cliente (estudante, aposentado ou regular): ").toLowerCase();

switch(tipo) {
  case "estudante":
    console.log("Desconto de 50%");
    break;
  case "aposentado":
    console.log("Desconto de 30%");
    break;
  case "regular":
    console.log("Sem desconto");
    break;
  default:
    console.log("Tipo inválido");
}