// const { find } = require("core-js/core/array")
const { find } = require("core-js/es/array")


const redeSociais = ["Facebook", "Instagram", "X"]

console.log(redeSociais[1])
let ii = 0
for(let i = 0; i < redeSociais.length; i++ ){
    
    console.log("Eu tenho perfil na rede social: " + redeSociais[i])
    // Outra Forma de esvrever a mesma coisa
    console.log(`Eu tenho perfil na rede social: ${redeSociais[i]}`)

}

// Usando forEach
console.log("##################### forEach ######################")
redeSociais.forEach(function(redeSocial, indice){
        console.log(`nº${indice} Eu tenho perfil na rede social: ${redeSocial}`)

})

// Usando o map

console.log("####################### map ########################")

const alunos = ["Pedro", "José", "Maria", "Rute"]

const listaAlunos = alunos.map(function(nomeAlunos, indice, array){
    return{
        lista: array[indice],
        ordem: indice,
        nome: nomeAlunos,
        curso: "Front-End"
    }
})

console.log(listaAlunos)

const num = [1, 2, 3, 4, 5]

const summer = num.map(function(sum){
    return sum * 2
})

console.log(summer)

console.log("###################### find ########################")


const finder = listaAlunos.find(function(item){

    console.log(item.nome == 'Rute')
    return item.nome == 'Rute'

})

console.log(finder)

console.log("##################### findIndex ###############################")

const indexDoArray = listaAlunos.findIndex(function(item){

    return item.nome == "Maria"
})

console.log(indexDoArray)

console.log("##################### every ###############################")

// Verifica se existe a palavra "Front-End" em toda a linha do array
let allTrueOrFalse = listaAlunos.every(function(item){

    return item.curso === "Front-End"
})

console.log(allTrueOrFalse)

// Adicionando dados no array listaAlunos

listaAlunos.push({
    
    nome: "Tiago",
    curso: "Back-End"
})

// Verifica se existe a palavra "Back-end" em toda a linha do array
allTrueOrFalse = listaAlunos.every(function(item){
    return item.curso === "Back-end"
})

console.log(allTrueOrFalse)

console.log("##################### some ###############################")

// Verifica se alguma elemento tem a informação dentro dela.
let someListaAlunos = listaAlunos.some(function(item){
    
    return item.curso === "Back-End" && item.curso === "Front-End"

})

console.log(someListaAlunos)

someListaAlunos = listaAlunos.some(function(item){
     return item.curso === "Back-End"
})


console.log(someListaAlunos)

console.log("##################### filter ###############################")


let filterListaAlunos = listaAlunos.filter(function(item){
    return item.curso === "Back-End" || item.nome === "Pedro"
})

console.log(filterListaAlunos)

function filterFunctionAlunos(item){
   return item.curso === "Back-End"
}

filterListaAlunos = listaAlunos.filter(filterFunctionAlunos)

console.log("filterListaAlunos: ", filterListaAlunos)

console.log("##################### reduce ###############################")

// const num = [1, 2, 3, 4, 5]

function reduceValues(acumuler, actualValues){
    acumuler += actualValues
    return acumuler
}

const soma = num.reduce(reduceValues, 0)

console.log(soma)

const reduceListaAlunos = listaAlunos.reduce(function(acumuler, actualValues){
    acumuler += `${actualValues.nome} `
    return acumuler
}, '')

console.log(reduceListaAlunos)

console.log("##### Outros exemplos #####")

const fruits = ["Banana", "Orange", "Apple", "Mango", "Melon"];

let fLen = fruits.length
console.log("Na primeira lista temos " + fLen + " Frutas")

fruits.push("Lemon")
fruits.push("Tomato")
fruits[fruits.length] = "Uva"

fLen = fruits.length
console.log("Na segunda lista tem " + fLen + " Frutas, após adcionarmos mais frutas")

let text = [];
for (let i = 0; i < fruits.length ; i++) {
    text.push(fruits[i]) ;
    
}

console.log("Lista de Frutas de text: " , text)
console.log("Lista de Frutas de fruits: ", fruits)


