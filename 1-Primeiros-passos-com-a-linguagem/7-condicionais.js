//Trabahlhando com condicionais

const listaDeDestinos = [
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
]

let idade = 20
let estaAcompanhada = false


//Remover um item se for maior de idade ou está acompanhada
if (idade >= 18 || estaAcompanhada) {
    listaDeDestinos.splice(0, 1) //apagar elemento do array
    console.log("Você removeu um item da lista")
} else {

    console.log("Não removeu um item por não ser maior de idade")
}

console.log(listaDeDestinos)
