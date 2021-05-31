export class Cliente {
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(senha) {
        return senha == this._senha;
    }

    //Acessor
    get cpf() {
        return this.cpf;
    }
}
