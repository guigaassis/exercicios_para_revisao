//Exercício de operador e: Determine se a pessoa está qualificada para dirigir 

export function op_e(){

let idade = 18;
let temCarteira =true;

if (idade >= 18 && temCarteira){
    return "Pode dirigir, chefe";
}else{
    return "Não pode dirigir, delinquente";
}

}
