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