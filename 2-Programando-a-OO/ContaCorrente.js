import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++;
    }

    //Sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        this._sacar(valor, taxa);
    }
}
