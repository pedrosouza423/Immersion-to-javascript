export class Cliente {
    nome;
    _cpf;

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }

    //Acessor
    get cpf() {
        return this.cpf;
    }
}
