function Person(firstN, year, place, state, skill){
    this.name = firstN
    this.age = year

    Live.call(this, place, state)
    Professional.call(this, skill)
    
    this.bio = function(){
        return this.name + ", tem " + this.age + " anos" + " ele é " + skill + " vive em " + place
    }
}

function Professional(skill){
    this.toDo = skill
}

function Live(place, state){
    this.coutryLive = place 
    this.stateLive = state
}

const joao = new Person("João" , 18, "Brasil", "Bahia", "Carpinteiro")
const pedro = new Person("Pedro", 23,  "Israel", "Belém", "Pescador" )
const mateus = new Person("Mateus", 21, "Itália", "Madrid", "Contador")


console.log(joao)
console.log(pedro)
console.log(joao.bio())
console.log(pedro.bio())
console.log(mateus.bio())