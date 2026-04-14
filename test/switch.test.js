import { sw } from "../switch/ex1";

test("Opção 1", () => {
    expect(sw(1)).toBe("Cadastrar usuário");
});

test("Opção 2", () => {
    expect(sw(2)).toBe("Listar usuários");
});

test("Opção 3", () => {
    expect(sw(3)).toBe("Excluir usuário");
});

test("Opção inválida", () => {
    expect(sw(99)).toBe("Opção inválida");
});