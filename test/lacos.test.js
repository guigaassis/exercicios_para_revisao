import { lac_ex1 } from "../laços/ex1";
import { lac_ex2 } from "../laços/ex2";
import { lac_ex3 } from "../laços/ex3";
import { lac_ex4 } from "../laços/ex4";
import { lac_ex5 } from "../laços/ex5";

test("Testar laços de mostrar o número 5 no test", () =>{
    let resposta = {resultado: lac_ex1(5)};
    expect(resposta.resultado).toEqual([5]);
});

test("Testar laços de mostrar os números de 1 a 5 no test", () =>{
    let resposta = {resultado: lac_ex2(5)};
    expect(resposta.resultado).toEqual([1,2,3,4,5]);
});

test("Tabuada do 5", () => {
    const resultado = lac_ex3(5);

    expect(resultado).toEqual([
        "5 x 1 = 5",
        "5 x 2 = 10",
        "5 x 3 = 15",
        "5 x 4 = 20",
        "5 x 5 = 25",
        "5 x 6 = 30",
        "5 x 7 = 35",
        "5 x 8 = 40",
        "5 x 9 = 45",
        "5 x 10 = 50"
    ]);
});

test("Testar forEach com lista de produtos", () => {
    const produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

    const resultado = lac_ex4(produtos);

    expect(resultado).toEqual(["Notebook", "Mouse", "Teclado", "Monitor"]);
});

test("Aplicar desconto de 10%", () => {
    const precos = [100, 200, 300];

    const resultado = lac_ex5(precos);

    expect(resultado).toEqual([90, 180, 270]);
});