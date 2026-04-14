
import { opr1 } from "../op_relacionais/ex1";
import { opr2 } from "../op_relacionais/ex2";
import { opr3 } from "../op_relacionais/ex3";
import { opr4 } from "../op_relacionais/ex4";
import { opr5 } from "../op_relacionais/ex5";
import { opr6 } from "../op_relacionais/ex6";


test("Verificar idade maior que 18", () => {
    expect(opr1(20)).toBe("Maior que 18? Sim");
});

test("Verificar temperatura menor que 15", () => {
    expect(opr2(10)).toBe("Menor que 15? true");
});

test("Determine se a nota é maior ou igual a 6", () => {
    expect(opr3(6)).toBe("Aprovado? true");
});

test("Determine se a pessoa pode dirigir", () => {
    expect(opr4(18)).toBe("Pode dirigir? true");
});

test("Determine se a senha é igual a digitada", () => {
    expect(opr5(1234)).toBe("Senha correta? true");
});


test("Determine se o número é diferente de 10", () => {
    expect(opr6(10)).toBe("É diferente de 10? false");
});