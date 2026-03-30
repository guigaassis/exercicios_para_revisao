// Utilize a estrutura for para exibir a tabuada do número 5 (de 1 a 10).
export function lac_ex3(numero){
let resultado = ""

for (let i = 1; i <= 10; i++) {
  resultado += `${numero} x ${i} = ${numero * i},`;
}
return resultado
}