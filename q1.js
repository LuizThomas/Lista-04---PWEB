let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 0 && idade <= 12) {
    console.log("você é criança.")
} else if (idade >= 13 && idade <= 17) {
    console.log("você é adolescente.")
} else if (idade >= 18 && idade <= 59) {
    console.log("você é adulto.")
} else if (idade >= 60) {
    console.log("você é idoso.")
} else {
    console.log("idade inválida")
}