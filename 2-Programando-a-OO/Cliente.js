export class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }

    //Acessor
    get cpf() {
        return this.cpf;
    }
}
