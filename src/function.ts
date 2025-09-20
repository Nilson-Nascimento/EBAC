// Tipagens em funções

console.log("##### Tipagem em funções #####")

function sumNumbers(n1: number, n2: number): number{
    return n1 + n2
}

console.log(sumNumbers(2, 2))

function area(base: number, altura: number): number{
    return base * altura
}

console.log(area(3, 3))

// Arrow function
const area_2 = (base: number, altura: number): number => base * altura

console.log(area_2(6, 6))

// Rest
function summer(...numeros: number[]): void{
    console.log(summer, "São números")
}

summer(3,2, 1)

function ifTeste(): string | number {
    if(false != false) {
        return 'Está condição é verdadeira'
    } else {
        return 10 + ` Está condição é falsa e retorna um tipo number:  ${10} ` + 20
    }
}

console.log(ifTeste())

const result = ifTeste()
console.log(result)