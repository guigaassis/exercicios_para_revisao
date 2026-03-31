//Dado um vetor contendo valores de vendas mensais, Exiba o resultado no console.


export function vetor_ex2(vendas){

let total = vendas.reduce((acumulador, vendas) => acumulador + vendas, 0);

return "Total vendido: " + total;

}
