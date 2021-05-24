//Criar um serviço para o Byte Bank, o sistema deve ter um cliente com nome, saldo e cpf e realizar contas de uma conta corrente

import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

//Criando conta
const cliente1 = new Cliente('Pedro', 12345678901);

const cliente2 = new Cliente('Alice', 22245678901);

//Criando conta corrente
const contaCorrentePedro = new ContaCorrente(101, cliente1);
const contaCorrenteAlice = new ContaCorrente(102, cliente2);

//Testando deposito e saque
contaCorrentePedro.depositar(5000);
contaCorrentePedro.sacar(500);

//Transferencia
contaCorrentePedro.transfererir(1200, contaCorrenteAlice);

console.log(contaCorrentePedro);
console.log(contaCorrenteAlice);

console.log(`---------------------//-----------`);
//Numero de contas criadas - atributo static
console.log(ContaCorrente.numeroDeContas);
