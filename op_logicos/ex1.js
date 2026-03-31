//Exercício de operador e: Determine se a pessoa está qualificada para dirigir 

export function op_e(idade,temCarteira){

if (idade >= 18 && temCarteira){
    return "Pode dirigir, chefe";
}else{
    return "Não pode dirigir, delinquente";
}

}
