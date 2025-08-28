// Rest é possível passar muitos valores sem precisar criar vários argumentos.
// dessa forma não funciona como array
// Não tem acesso aos métodos de arrary(find, reduce, map, etc..)
function summer(){
    let sum = 0
    for (let i = 0 ; i < arguments.length; i++){
        sum += arguments[i]
    }

    return sum
}

console.log(summer(10,20, 30))

// dessa forma funciona como array
// Tem acesso aos métodos de arrary(find, reduce, map, etc..)
function restSummer(...number){
    const sum2 = number.reduce((total, numberActual) => {
        total += numberActual
        return total
    }, 0 )

    return sum2
}

console.log(restSummer(10, 20, 40))

console.log("#################### Spred ##################")

// Spred - Com o spred é possível espalhar os item de um array, ele tem a mesma aparência do rest. O que diferencia 
// o rest do spred é o caso de uso. O rest é usado como argumento de uma função, o spred é usado para fazer concatenação,
// console.log, preenchimento de objetos.

const num = [1, 2, 3, 4, 5]
console.log(num)

const spTeams = ["São Paulo", "Palmeiras", "Bragantino", "Santos"]
const rjTeams = ["Botafogo", "Vasco", "Fluminense", "Flamengo"]

// Concatenação

// Sem Spred, de forma convencional.
const futebolTeams = spTeams.concat(rjTeams)
console.log(futebolTeams)

// Com Spred
let spredFutebolTeams = [...spTeams, ...rjTeams]
console.log(spredFutebolTeams)

// Espalhamento, separação das letas de uma string.

spredFutebolTeams = [...spTeams[2], ...rjTeams]
console.log(spredFutebolTeams)

// Concatenação de Objeto com spred

const juliaCar = {
    model: "gol",
    brand: "vw",
    motor: "1.6"
}

const anaCar = {
    ...juliaCar,
    motor: "1.8"
}

console.log(anaCar)

// Desestruturação

    // Forma comum de acessar uma propriedade de um objeto
const juliaMotor = juliaCar.motor

console.log(juliaMotor)

    // Acessando através do ES6+
const {motor: getJuliaMotor} = juliaCar

console.log("Motor do carro de Júlia: ", getJuliaMotor)

const {motor: getAnaMotor} = anaCar

console.log("Motor do carro de Ana: ", getAnaMotor)

    // Aplicando desestruturação nos Arrays

const [team1, team2,team3, ...teams] = futebolTeams
console.log(team3)
console.log(...teams)
console.log(teams)

const [item1, item2,item3, ...etc] = rjTeams[2]
console.log(item3)
console.log(...etc[2])
console.log(etc[5])