const rs = require('readline-sync');

const user = rs.question("Usuário: ");
const pass = rs.question("Senha: ");

if (user === "thomas03298" && pass === "7483278") {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado");
}
