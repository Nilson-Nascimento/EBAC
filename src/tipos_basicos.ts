// Type Boolean
console.log("##### Type Boolean #####")
let itsRain: boolean = false

console.log(itsRain)

// Type number
console.log("##### Type number #####")

let age: number = 30 // integer
let tall: number = 1.75 // fração
console.log(age)
console.log(tall)

// Type string
console.log("##### Type string #####")

const nacionality: string = "brasilian"
console.log(nacionality)

// Type Arrays
console.log("##### Type Arrays #####")

const coworks: string[] = ['Pedro', 'André']

// Arrays com a palavra reservada Array<string>

const tecnology: Array<string> = ['html', 'css', 'js']
tecnology.push('ts') // adding iten
console.log(tecnology)

// Array com a palavra reservada readonlyArray

const stringOfArray: ReadonlyArray<string> = ['10', '20','30']
const numberOfArray: ReadonlyArray<number> = [40, 50, 60]
// stringOfArray.push() // push itsn't possible with ReadonlyArray

console.log(stringOfArray)
console.log(numberOfArray)


// Type Tuplas
console.log("##### Type Tuplas #####")

const tuplasOfArray: [string, boolean, number] = ['Paulo', true, 33]
const person: [name:string, work:boolean, age:number ] = ['Lucas', true, 30]

console.log(tuplasOfArray)
console.log(person)

// Type Union Type
console.log("##### Type Union Type #####")

let personAge: number | string = 25
console.log(personAge)

personAge = '25 age'
console.log(personAge)


// Type Any
console.log("##### Type Any #####")

let anyDados: any = 'Uma string'
anyDados = 10
anyDados = true
anyDados = [1,'string', true]