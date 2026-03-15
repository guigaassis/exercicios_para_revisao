//Dado um vetor contendo valores de vendas mensais, Exiba o resultado no console.


export function vetor_ex2(){

let vendas = [1000, 1500, 2000, 500];

let total = vendas.reduce((acumulador, valor) => acumulador + valor, 0);

return "Total vendido: " + total;

}
