//Exercício de if encadeado: Dê um comentário para a nota de um aluno com base em suas notas.
export function est_ex3(){
let nota = 3;

if (nota >=9){
    return("Sua nota é "+ nota +" e foi excelente!")
}else if (nota >= 7){
    return("Sua nota é "+ nota +" e foi boa!")
}else{
    return("Sua nota é "+ nota +" e precisa melhorar!")
}
}