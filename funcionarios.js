// ########## Sem Herança ############################

function Pessoa(nome){
    this.nome = nome
    this.dizOi = function(){
        console.log(this.nome + " diz Olá")
    }
}

function Funcionario(nome, cargo, salario){
    this.nome = nome
    this.cargo = cargo
    this.salario = salario
}

// ############ Herança #########################

function Pessoa(nome){
    this.nome = nome
    this.dizOi = function(){
        console.log(this.nome + " diz Olá")
    }
}

function Funcionario(nome, cargo, salario){
    this.nome = nome
    this.cargo = cargo
    this.salario = salario
}


const pessoa1 = new Pessoa("Maria")
const funcionario1 = new Funcionario("José", "Carpinteiro", "R$ 7.000,00")
const funcionario2 = new Funcionario("Pedro", "Pescador", 10000)

// pessoa1.dizOi()

funcionario1.dizAi()

console.log(pessoa1)
console.log(funcionario1, "Estância de funcionário 1")
console.log(funcionario2, "Estância de funcionário 2")