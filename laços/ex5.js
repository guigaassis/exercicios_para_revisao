// Dado um vetor com preços de produtos, utilize map para aplicar 10% de desconto em cada valor e exibir o novo vetor.

export function lac_ex5(precos){
    return precos.map(preco => preco * 0.9);
}