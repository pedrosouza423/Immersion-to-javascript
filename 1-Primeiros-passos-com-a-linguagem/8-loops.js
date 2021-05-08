//Para o usuário realizar a viagem ele tem que ser de maior ou estar acompanhado e existir passagem para o local que ele deseja viajas

const listaDeDestinos = [
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
]

//Definindo variáveis de idade, se está acompanhado e o destino para qual quer ir
let idade = 20
let estaAcompanhada = false
const destino = "Salvador"

//Ver se o passageiro pode viajar
const podeComprar = (idade >= 18 || estaAcompanhada)

let destinoExiste = false

//Ver se existe uma passagem do lugar
for (i of listaDeDestinos) {
    if (i == destino) {
        // console.log("Destino existente")
        destinoExiste = true
        break
    } else {
        // console.log("Destino não existe")

    }
}

destinoExiste = destinoExiste && podeComprar ? "Boa viagem" : "Desculpe tivemos um erro"
console.log(destinoExiste)