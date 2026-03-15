// Uma conta de R$ 240 será dividida entre 4 amigos. Quanto cada um pagará?
export function opa4(){
let conta = 240;
let pessoas = 4;

let valorPorPessoa = conta / pessoas;

return `Cada um paga: R$${valorPorPessoa}`;
}