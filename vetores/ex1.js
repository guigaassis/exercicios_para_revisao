// Busque alunos que estão no vetor e exiba no console.

export function vetor_ex1(){

let alunos = ["Ana", "Carlos", "Guilherme", "Julia"];
let nomeBuscado = "Safado";

if (alunos.includes(nomeBuscado)) {
  return "Aluno encontrado";
} else {
  return "Aluno não encontrado";
}

}
