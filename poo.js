// Criando um objeto de forma literal no JS.

const carroDeGabriel = {
    // Atributo
    modelo: "Ferrari",
    fabricante:"Ferrari",
    anoModelo:2035,
    anoFabricacao: 2035,
    // Método
    acelerar: function(){
        console.log("80km/s")
    }
}

const carroDeLevi = {
    // Atributos
    modelo:"Ferrari",
    fabricante: "Ferrari",
    anoModelo: 2030,
    anoFabricacao: 2030,
    // método
    acelerar: function(){
        console.log("80Km/s")
    }
}

// Criando um objeto com função construtora.

function Carro(modelo, fabricante, anoModelo, anoFabricacao){
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoFabricacao = anoFabricacao
    this.anoModelo = anoModelo
    this.acelerar = function(){
        console.log("80Km/s")
    }
}

const carroDeGabrielV2 = new Carro("Ferrari", "Ferrari", 2035, 2035)
const carroDeLeviV2 = new Carro("Ferrari", "Ferrari", 2030, 2030)

console.log(carroDeGabrielV2)
console.log(carroDeLeviV2)

// ########################################################

const nome = "Matuzalem"
const idade = 938
const habilidades = ["caça", "carpintaria"]

const pessoa = {
    nome: nome,
    idade: idade
}


console.log(pessoa.nome) // acessando com a notação (.)
console.log(pessoa["nome"]) // Acessando por colchetes
function exibeAtributo(nomeAtributo){
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome')

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof habilidades)

// console.log(carroDeGabrielV2 instanceof Carro)