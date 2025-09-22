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
// Teste 
let num = [1, 2, 3, 4, 5]
let num2 = [0, 1, 2, 3, 4]

function order(): any {
    for (let i = 0; i > num.length; i++ ){
    for (let ii = 0; ii > num2.length; ii++){
        let num3 = [0]
        console.log(num[i]);
    }
    console.log(num2)
}
}

console.log(num.length)

order()