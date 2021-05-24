import { Cliente } from './Cliente.js';

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _saldo = 0;
    _cliente;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }

    

    //Acessores
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //Métodos
    sacar(valor) {
        if (this._saldo < valor) {
            console.log(`Seu saldo é insuficiênte para sacar esse valor`);
            return;
        }

        this._saldo -= valor;
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log(`Você não pode depositar um valor negativo`);
            return;
        }

        this._saldo += valor;
        return this._saldo;
    }

    transfererir(valor, conta) {
        if (this._saldo < valor) {
            console.log('Transferência invalida, saldo insuficiente');
            return;
        }

        this.sacar(valor);
        conta.depositar(valor);
    }
}
