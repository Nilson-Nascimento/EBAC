// Map
console.log("################## Map #####################")


const myMap = new Map()

myMap.set("altura", "1,70 m")
myMap.set("largura", "50 cm")
myMap.set("peso", "70 kg")


console.log(myMap.get("largura"))
    // Expected output: 50 cm

console.log(myMap)
    // Expected output: Map(3) {
                                // 'altura' => '1,70 m',
                                // 'largura' => '50 cm',
                                // 'peso' => '70 kg'
                                // }

// Recuperando a quantidade de items dentro do map(myMap).

console.log(myMap.size)
    // Expected output: 3


// Verificando se uma chave existe dentro de um map

console.log(myMap.has("peso"))
    // Expected output: true

console.log(myMap.has("profundidade"))
    // Expected output: false

// Removendo todos os item de um map

// myMap.clear()
console.log(myMap.size)
    // Expected output: 0

console.log(myMap)
    // Expected output: Map(0) {}



// Fazendo iteração dentro de um map com o for....of

const myMapIterator = new Map()

myMapIterator.set("estuduar", "front-end", "inglês")
myMapIterator.set("trabalhar", "desenvolvedor", "bridgestone")
myMapIterator.set("Pais", "Canadá", "Portugal")

for (let chaves of myMapIterator.keys()){
    console.log(chaves)
}
    // Expected output: 
        // estuduar
        // trabalhar
        // Pais

for (let valores of myMapIterator.values()){
    console.log(valores)
}
    // Expected output: 
        // front-end
        // desenvolvedor
        // Canadá



// Mostrando a Estrutura do Map

for (let valores_2 of myMapIterator.entries()){
    console.log(valores_2)
}

    // Expected output:
        // [ 'estuduar', 'front-end' ]
        // [ 'trabalhar', 'desenvolvedor' ]
        // [ 'Pais', 'Canadá' ]

// Desestruturação do Map

for (let [chave, valor] of myMapIterator.entries()){
    console.log("Chave:",chave,"| Valor:",valor)
    console.log(`Chave: ${chave} | Valor: ${valor}`)
}

    // Expected output:

        // Chave: estuduar | Valor: front-end
        // Chave: estuduar | Valor: front-end
        // Chave: trabalhar | Valor: desenvolvedor
        // Chave: trabalhar | Valor: desenvolvedor
        // Chave: Pais | Valor: Canadá
        // Chave: Pais | Valor: Canadá

// Deletando um item do Map

myMapIterator.delete("trabalhar")
console.log(myMapIterator)

    // Expected output:
    // Map(2) { 'estuduar' => 'front-end', 'Pais' => 'Canadá' }

console.log(" ")
console.log("################## Set #####################")
console.log(" ")
// Set

// A estrutura do set é mais rígida, não tem o conjuto de chave e valor e os valores de um set não podem de repetir.

// CRIANDO UM SET

const cpf = new Set()

cpf.add("416.624.695-00")
cpf.add("852.775.805-90")
cpf.add("156.374.975-08")

console.log(cpf)
console.log(cpf.keys())
console.log(cpf.values())

cpf.forEach((i) => {
    console.log(i)
})

// Filtrando valores únicos em um array com set

const names = ["Pedro", "Maria", "João", "Rute" , "Pedro", "Maria"]

names.filter((x) => {
    console.log(x)
})

const namesFilterSet = new Set([...names])

console.log(namesFilterSet)

// Transformando um Set em um Array com Spread

const namesFilterArray = [...namesFilterSet]

console.log(namesFilterArray)