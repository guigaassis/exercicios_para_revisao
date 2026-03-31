// Busque alunos que estão no vetor e exiba no console.

export function vetor_ex1(nomeBuscado){

let alunos = ["Ana", "Carlos", "Guilherme", "Julia"];


if (alunos.includes(nomeBuscado)) {
  return "Aluno encontrado";
} else {
  return "Aluno não encontrado";
}

}
