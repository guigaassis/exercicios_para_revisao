//Exercício de if composto: Aprove ou Reprove um aluno caso a nota dele seja boa ou ruim.
export function est_ex2(nota){
    if (nota >= 6){
        return `A nota foi ${nota} e ele foi aprovado`;
    } else {
        return `A nota foi ${nota} e ele foi reprovado`;
    }
}