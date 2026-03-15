// Dado um vetor com preços de produtos, utilize map para aplicar 10% de desconto em cada valor e exibir o novo vetor.

export function lac_ex5(){

let precos = [100, 200, 300, 400];

let precosComDesconto = precos.map(function(preco) {
  return preco * 0.9;
});

return precosComDesconto;

}
