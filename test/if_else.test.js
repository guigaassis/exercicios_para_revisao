
import { est_ex1 } from "../est_condicional/ex1";
import { est_ex2 } from "../est_condicional/ex2";
import { est_ex3 } from "../est_condicional/ex3";
import { est_ex4 } from "../est_condicional/ex4";


test("Testar IfElse caso o usuario seja maior de idade", () => {
    let idade = { resultado: est_ex1(18) };
    expect(idade.resultado).toBe("Você é Maior de idade");
});

test("Tester ifelse composto", () => {
    const valorNota = 6;

    let nota = { resultado: est_ex2(valorNota) };

    expect(nota.resultado).toBe(`A nota foi ${valorNota} e ele foi aprovado`);
});

test.each([
    [10, "foi excelente!"],
    [8, "foi boa!"],
    [5, "precisa melhorar!"]
])("Testando nota %i", (nota, mensagem) => {
    expect(est_ex3(nota)).toBe(`Sua nota é ${nota} e ${mensagem}`);
});

test("Testar ifelse ternário", () => {
    const valor = 4;

    let valorimopa = { resultado: est_ex4(valor) };

    expect(valorimopa.resultado)
        .toBe(`Número escolhido foi ${valor} e ele é par`);
});