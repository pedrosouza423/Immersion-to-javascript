import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Pedro', 15000, 12345678901);
const gerente = new Gerente('Will', 5000, 12345678902);

diretor.cadastrarSenha('123456789');
gerente.cadastrarSenha('123');

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456789');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);

// const cliente = new Cliente('Pedro', 12345678901, '123');
// const clienteEstaLogado = SistemaAutenticacao.login(cliente, '123');

// console.log(clienteEstaLogado)

