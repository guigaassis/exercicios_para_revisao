// Utilize a estrutura do...while para exibir os números de 1 até 5. A estrutura deve executar pelo menos uma vez.
export function lac_ex2(){
let numero = 1;
let resultado = ""

do {
  resultado += numero + " , ";
  numero++;
} while (numero <= 5);
 return("Executando:"+ resultado);
}