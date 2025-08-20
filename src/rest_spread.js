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