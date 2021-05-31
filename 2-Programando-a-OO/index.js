import { Cliente } from './Cliente.js';
import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { ContaSalario } from './Conta/ContaSalario.js';

//Criando conta
const cliente1 = new Cliente('Pedro', 12345678901);
const contaCorrentePedro = new ContaCorrente(101, cliente1);

//Testando deposito e saque
contaCorrentePedro.depositar(5000);
contaCorrentePedro.sacar(500);

//Criando uma conta polpança
const conta1 = new ContaSalario(cliente1);
conta1.depositar(100);
conta1.sacar(10);

console.log(contaCorrentePedro);
console.log(conta1);
