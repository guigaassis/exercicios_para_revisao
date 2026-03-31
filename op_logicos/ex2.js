//Exercício de operador ou: Determine se a pessoa vai receber desconto.
export function op_ou(temDesconto, clienteVIP){

if (temDesconto || clienteVIP){
    return "Recebe desconto";
}else{
    return "Não recebe desconto";
}

}
