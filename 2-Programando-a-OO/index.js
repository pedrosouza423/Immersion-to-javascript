//Criar um serviço para o Byte Bank, o sistema deve ter um cliente com nome, saldo e cpf e realizar contas de uma conta corrente

import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

//Criando conta
const cliente1 = new Cliente();

cliente1.nome = 'Pedro';
cliente1.cpf = 12345678901;

const cliente2 = new Cliente();

cliente2.nome = 'Alice';
cliente2.cpf = 22245678901;

//Criando conta corrente
const contaCorrentePedro = new ContaCorrente();
const contaCorrenteAlice = new ContaCorrente();
contaCorrentePedro.cliente = cliente1;
contaCorrenteAlice.cliente = cliente2;


//Definindo agencia
contaCorrentePedro.agencia = 101;
contaCorrenteAlice.agencia = 102;

//Testando deposito e saque
contaCorrentePedro.depositar(5000);
contaCorrentePedro.sacar(500);

//Transferencia
contaCorrentePedro.transfererir(1200, contaCorrenteAlice);

console.log(contaCorrentePedro);
console.log(contaCorrenteAlice);
