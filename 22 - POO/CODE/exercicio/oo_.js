function Person(firstN, year){
    this.name = firstN
    this.age = year
}

function Professional(firstN, skill, year){
    this.toDo = skill

    Person.call(this, firstN, year)
}

const joao = new Person("João" , 18)

const pedro = new Professional("Pedro", "Pescador", 28)

console.log(joao.age)
console.log(pedro)