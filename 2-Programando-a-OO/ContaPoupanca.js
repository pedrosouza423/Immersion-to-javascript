export class ContaPoupanca {
    constructor(saldoInicial, cliente, agencia) {
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

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