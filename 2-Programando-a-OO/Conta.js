export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
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
        let taxa = 1;
        this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo < valorSacado) {
            console.log(`Seu saldo é insuficiênte para sacar esse valor`);
            return;
        }

        this._saldo -= valorSacado;
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
