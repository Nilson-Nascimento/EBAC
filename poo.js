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
    idade: idade,
}

// Adicionando atributo ao objeto

pessoa.sobrenome = "de Deus"


console.log(pessoa.nome) // acessando com a notação (.)
console.log(pessoa["nome"]) // Acessando por colchetes


// Consulta dinâmica
function exibeAtributo(nomeAtributo){
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome')

// Verificando se um atributo existe em um elemento. Podemos utilizar a notação ponto(.) ou o ([])
//Por padrão o JS verifica se o atributo não é null ou undefined.

if (pessoa.sobrenome){
    console.log("Meu sobrenome é " + pessoa["sobrenomenome"])
} 
else {
    console.log("Esse Atibuto não existe.")
}

if (pessoa["nome"]){
    console.log("Meu nome é " + nome)
}

// Consulta com a palavra reservada in.

if (pessoa.sobrenome in pessoa){
    console.log("Eu tenho sobrenome ")
}
else {
    console.log("Eu não tenho sobrenome ")
}

const debug = pessoa.sobrenome in pessoa
console.log(debug)

// Apesar de uma constante ter seus valores imutáveis, os atributos dentro dela são mutáveis.

pessoa.nome = "Adão"

console.log(pessoa.nome)

// Para tornar imutável uma Constante utilizamos a palavra reservada Object.freeze

Object.freeze(pessoa)

pessoa.nome = "Abrão"
console.log(pessoa.nome)


// Transformando um array com os nomes dos atributos

console.log(Object.keys(pessoa))
console.log(Object.keys(pessoa).length)

// Transformando um array com os valores dos atributos

console.log(Object.values(pessoa))






// Verificando se em um atributo existe um elemento

 

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof habilidades)

// console.log(carroDeGabrielV2 instanceof Carro)