import { var_ex1 } from "../dec_variaveis/ex1";
import { var_ex2 } from "../dec_variaveis/ex2";
import { var_ex3 } from "../dec_variaveis/ex3";

test("testar suas variáveis", () => {
    const nome = "Guilherme";
    const idade = 17;
    const estudante = true;
    
    let varivaveis = { resultado: var_ex1(nome, idade, estudante) };
    expect(varivaveis.resultado).toBe(`${nome}, ${idade}, ${estudante}`);
  });

test("testar duas variaveis",() =>{
    let vars = {resultado: var_ex2(20,20)};
    expect(vars.resultado).toBe(40)
})

test("testar a area",() =>{
    let raio = {resultado: var_ex3(4)};
    expect(raio.resultado).toEqual(50.24)
})