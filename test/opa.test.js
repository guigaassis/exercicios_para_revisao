
import { opa1 } from "../op_aritméticos/ex1";
import { opa2 } from "../op_aritméticos/ex2";
import { opa3 } from "../op_aritméticos/ex3";
import { opa4 } from "../op_aritméticos/ex4";
import { opa5 } from "../op_aritméticos/ex5";
import { opa6 } from "../op_aritméticos/ex6";
import { opa7 } from "../op_aritméticos/ex7";

test("Calcular total da compra", () => {
    expect(opa1(150, 200)).toBe("Total da compra: R$350");
});

test("Calcular o total de gasto", () => {
    expect(opa2(500, 180)).toBe("Saldo restante: R$320");
});

test("Calcular o total de 4 produtos", () =>{
    expect(opa3(30,4)).toBe("Total a pagar: R$120")
})

test("Calcular a divisão", () =>{
    expect(opa4(240,4)).toBe("Cada um paga: R$60")
})

test("Verificar se o número 17 é ímpar ou par", () => {
    expect(opa5(17)).toBe("Resto: 1")
})

test("Calcular 5 a terceira potência", () =>{
    expect(opa6(5,3)).toBe("Resultado:125")
})

test("Calcule a raiz quadrada de 144.", () =>{
    expect(opa7(144)).toBe("Raiz quadrada:12")
})