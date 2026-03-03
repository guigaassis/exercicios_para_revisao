// Busque alunos que estão no vetor e exiba no console.

let alunos = ["Ana", "Carlos", "Guilherme", "Julia"];

let nomeBuscado = "Guilherme";

if (alunos.includes(nomeBuscado)) {
  console.log("Aluno encontrado");
} else {
  console.log("Aluno não encontrado");
}