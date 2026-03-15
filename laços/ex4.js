// Dado um vetor com nomes de produtos, utilize forEach para exibir cada produto no console.
export function lac_ex4(){
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];
let resultado = "";

produtos.forEach(function(produto) {
  resultado += `Produto: ${produto}<br>`;
});
  return resultado
}