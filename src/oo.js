// ##### Constructor function #####

// function Pokemon(pokename, pokeType){
//     this.name = pokename
//     this.type = pokeType
// }

// ##### Estâcia da função construtora #####

// const pikachu = new Pokemon("Pikachu", "Elétrico")

console.log("##################  OO com Class ################")

class PokemonClass{
    name = ""
    type = ""
}

let pikachuClass = new PokemonClass()
pikachuClass.name = "Pikachu"
pikachuClass.type = "Elétrico"

console.log(pikachuClass, " sem constructor")


// ##### Passando argumentos de outra forma, criando uma função construtura. #####

class PokemonClassConstructor{

    constructor(pokename, pokeType){
        this.name = pokename
        this.type = pokeType
    }
}

pikachuClass = new PokemonClassConstructor("Pikachu", "Elétrico")

console.log(pikachuClass, " com constructor") 

// #### Criando um Método ####

class PokemonMetodo{
    constructor(pokename, pokeType){
        this.name = pokename
        this.type = pokeType
    }

    // Método
    atack(atackName){
        console.log(`${this.name} atacou com ${atackName}`)
    }
}

pikachuClass = new PokemonMetodo("Pikachu", "Elétrico")
pikachuClass.atack("Choque do trovão")
console.log(pikachuClass)

//  Herança 

// class Pikachu extends Pokemon{

// }

// const pikachuAsh = new Pikachu("Pikachu_Ash", "Elétrico")
// console.log(pikachuAsh)

// #### Verificando se uma instancia pertence a uma classe ####

// console.log(pikachuAsh instanceof Pikachu)
// console.log(pikachuAsh instanceof Pokemon)


// #### Usando o construtor e a palavra reservada super. ####

// class Pikachu extends Pokemon{
//     constructor(){
//         // A Palavra super faz referência a class Pai.
//         super("Pikachu_3", "Elétrico_3")
//     }
// }


// const pikachu_3 = new Pikachu() //não precisa passar argumentos.
// console.log(pikachu_3)


// ##### Sobre escrevendo um Método #####

// class Pokemon {

//     constructor(pokename,pokeType){
//         this.name = pokename
//         this.type = pokeType
//     }
//     atack(atackName){
//         console.log(`${this.name} atacou com ${atackName}`)
//     }
// }

// class Pikachu extends Pokemon{
//     constructor(){
//         super("pikachu_4", "Elétrico_4")
//     }

//     // Método e Polimorfismo
//     atack(){
//         console.log(`${this.name} atacou com Super Trovão`)
//     }

// }

// const pikachu_4 = new Pikachu()
// pikachu_4.atack()
// console.log(pikachu_4)

// #### Encapsulamento ####

// class Pokemon {
//     hp = 100

//     constructor(pokename, pokeType){
//         this.name = pokename
//         this.type = pokeType
//     }

//     atack(doneAtackName){
//         this.atackName = doneAtackName
//         console.log(`${this.name} atacou com Faísca`)
//     }

//     dano(){
//         this.hp -= 10
//         console.log(`${this.name} tem ${this.hp} de vida`)
//     }

//     status(){
//         console.log(`Status de ${this.name}: [ Último ataque: ${this.atackName} | Nivel de Vida ${this.hp}%]`)
//     }

// }

// class Pikachu extends Pokemon{
//     constructor(){
//         super("Pikachu", "Elétrico")
//     }
// }
// const pikachu_5 = new Pikachu()
// pikachu_5.atack("Descarga_Intesa")
// pikachu_5.dano()
// pikachu_5.dano()
// pikachu_5.status()

console.log("########## Campo Privado ##########")
// ##### Tornando um campo Privado ####

class Pokemon {
    constructor(pokename, pokeType){
        this.name = pokename
        this.type = pokeType
    }
    
    #hp = 100 // campo privado, só é possível ser modificada pela classe Pokemon.

    atack(doneAtackName){
        this.atackName = doneAtackName
        console.log(`${this.name} atacou com ${doneAtackName}`)
    }

    done(){
        this.#hp -= 10
        console.log(`${this.name} tem ${this.#hp} de vida`)
    }

}

class Pikachu extends Pokemon{
    constructor(){
        super("Pikachu", "Elétrico")
    }
    
    status(){
        console.log(`Status de ${this.name}:[Último ataque: ${this.atackName} | Nível de Vida: ${this.hp}% ]`)
    }
}

const pikachu_6 = new Pikachu()
pikachu_6.atack("Trovoada")
pikachu_6.done()
pikachu_6.status()
pikachu_6.done()