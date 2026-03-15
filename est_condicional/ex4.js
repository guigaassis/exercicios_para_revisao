//Exercício ternário: Determine se o número escolhido é par ou ímpar.

export function est_ex4(){
let numero = 9;

let resultado = numero % 2 == 0 ? "par" : "ímpar";
return("Número escolhido foi "+ numero +" e ele é "+ resultado);
}