// ########## Sem Herança ############################

// function Pessoa(nome){
//     this.nome = nome
//     this.dizOi = function(){
//         console.log(this.nome + " diz Olá")
//     }
// }

// function Funcionario(nome, cargo, salario){
//     this.nome = nome
//     this.cargo = cargo
//     this.salario = salario
// }

// ############ Herança #########################

function Pessoa(nome){
    this.nome = nome
    console.log(nome + " dentro de Pessoa")
    this.dizOi = function(){
        console.log(this.nome, cargo.cargo, ", diz a Paz do Senhor.") //função que será executada em Funcionário por haver uma chamada Pessoa.call() detro dele.
    }

}

function Funcionario(cargo, salario){
    
    this.cargo = cargo
    this.salario = salario


    this.dizCargo = function(nome){
        this.nome = nome
        console.log(this.nome, cargo + ", salário de " + salario)
    }
    
    
    Pessoa.call(this)
    
}


const pessoa1 = new Pessoa("José")
// const funcionario1 = new Funcionario("03", "Carpinteiro", "R$ 7.000,00")
// const funcionario2 = new Funcionario("Pedro", "Pescador", 10000)
const cargo = new Funcionario("Obreiro"," R$ 3.000,00")

console.log(pessoa1.nome)
cargo.dizCargo()
cargo.dizOi(this.nome)
pessoa1.dizOi()
// pessoa1.dizCargo()

// funcionario1.dizOi()

// console.log(pessoa1, "Estância de pessoa1")
// console.log(funcionario1, "Estância de funcionário 1")
// console.log(funcionario2, "Estância de funcionário 2")
// console.log(cargo, "Estância de Cargo")