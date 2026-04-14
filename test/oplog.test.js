import { op_e } from "../op_logicos/ex1";
import { op_ou } from "../op_logicos/ex2";
import { op_not } from "../op_logicos/ex3";

//ex1
test("Pode dirigir", () => {
    expect(op_e(18, true)).toBe("Pode dirigir, chefe");
});

test("Menor de idade", () => {
    expect(op_e(17, true)).toBe("Não pode dirigir, delinquente");
});

test("Sem carteira", () => {
    expect(op_e(20, false)).toBe("Não pode dirigir, delinquente");
});

test("Nenhum dos dois", () => {
    expect(op_e(16, false)).toBe("Não pode dirigir, delinquente");
});
//ex1

//ex2
test("Recebe desconto com cupom", () => {
    expect(op_ou(true, false)).toBe("Recebe desconto");
});

test("Recebe desconto sendo VIP", () => {
    expect(op_ou(false, true)).toBe("Recebe desconto");
});

test("Recebe desconto com os dois", () => {
    expect(op_ou(true, true)).toBe("Recebe desconto");
});

test("Não recebe desconto", () => {
    expect(op_ou(false, false)).toBe("Não recebe desconto");
});
//ex2

//ex3
test("Não está chovendo", () => {
    expect(op_not(false)).toBe("Pode sair fiot");
});

test("Está chovendo", () => {
    expect(op_not(true)).toBe("Seloco veinho sai nao truta");
});
//ex3
