import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

//Criando conta
const cliente1 = new Cliente('Pedro', 12345678901);
const contaCorrentePedro = new ContaCorrente(101, cliente1);

//Testando deposito e saque
contaCorrentePedro.depositar(5000);
contaCorrentePedro.sacar(500);

//Criando uma conta polpança
const conta1 = new ContaPoupanca(50, cliente1, 101);
console.log(contaCorrentePedro);
console.log(conta1);
