//Dado um vetor contendo valores de vendas mensais, Exiba o resultado no console.


let vendas = [1000, 1500, 2000, 500];

let total = vendas.reduce((acumulador, valor) => acumulador + valor, 0);

console.log("Total vendido:", total);