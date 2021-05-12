//Criar um serviço para o Byte Bank, o sistema deve ter um cliente com nome, saldo e cpf e realizar contas de uma conta corrente

class Cliente{
    nome
    cpf
}

class ContaCorrente {
    agencia
    saldo =0
    
    sacar(valor){
        if(this.saldo < valor){
            console.log(`Seu saldo é insuficiênte para sacar esse valor`)
            console.log(`Você possui um saldo de ${this.saldo}`)
        }

        this.saldo -= valor
        console.log(`Você realizou um saque de ${valor}`)
        console.log(`Você possui um saldo de ${this.saldo}`)
    }

    depositar(valor){
        if(valor < 0){
            console.log(`Você não pode depositar um valor negativo`)
            
        }

        this.saldo += valor
        console.log(`Você realizou um deposito de ${valor}`)
        console.log(`Você possui um saldo de ${this.saldo}`)
    }
}

const cliente1 = new Cliente()

cliente1.nome = "Pedro"
cliente1.cpf = 12345678901

const cliente2 = new Cliente()

cliente2.nome = "Alice"
cliente2.cpf = 22245678901

const contaCorrentePedro = new ContaCorrente()
contaCorrentePedro.agencia = 1001
contaCorrentePedro.saldo = 5000

// console.log(cliente1)
// console.log(cliente2)

contaCorrentePedro.sacar(5000)
contaCorrentePedro.depositar(7000)
console.log(contaCorrentePedro)