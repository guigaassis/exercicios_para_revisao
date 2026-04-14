// Utilize a estrutura while para exibir o número 5 no console.

export function lac_ex1(num){
    let resultado = [];
    let contador = 1;

    while (contador <= num) {
        if (contador === num) {
            resultado.push(contador);
        }
        contador++;
    }

    return resultado;
}