// Crie um sistema simples de menu de opções.

export function sw(){
let opcao = 1;
let resultado = "";

switch (opcao) {
  case 1:
    resultado = "Cadastrar usuário";
    break;
  case 2:
    resultado = "Listar usuários";
    break;
  case 3:
    resultado = "Excluir usuário";
    break;
  default:
    resultado = "Opção inválida";
}

return resultado;
}
