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

// function Pessoa(nome){
//     this.nome = nome
//     console.log(nome + " dentro de Pessoa")
//     this.dizOi = function(){
//         console.log(this.nome, cargo.cargo, ", diz a Paz do Senhor.") //função que será executada em Funcionário por haver uma chamada Pessoa.call() detro dele.
//     }

// }

// function Funcionario(cargo, salario){
    
//     this.cargo = cargo
//     this.salario = salario


//     this.dizCargo = function(nome){
//         this.nome = nome
//         console.log(this.nome, cargo + ", salário de " + salario)
//     }
    
    
//     Pessoa.call(this)
    
// }

// ###############################  Encapsulamento #######################################

function Pessoa (nome){
    this.nome = nome
}

function Funcionario(nome, funcao, valor){
    this.colaborador = nome
    this.cargo = funcao
    // this.salario = valor
    let _salario = valor

    this.getValor = function(){
        return `O${teste} salário de ${nome} é ${_salario}`
    }

    this.setValor = function(valor){
        _salario = valor
    }
}



const pessoa1 = new Pessoa("José")
const funcionario1 = new Funcionario("Pedro", "Carpinteiro", "R$ 7.000,00")
// const funcionario2 = new Funcionario("Pedro", "Pescador", 10000)
const cargo = new Funcionario("Obreiro"," R$ 3.000,00")
let teste = ""

console.log(pessoa1.nome)
console.log(funcionario1.getValor()) // Mostra o valor de R$ 7.000,00
funcionario1.setValor("R$ 10.0000,00") // Atribui um novo valor de R$ 10.0000,00

if (funcionario1._salario === funcionario1.setValor()){
    console.log("O teste deu certo")
}
console.log(funcionario1.getValor()) // Mostra o novo valor de R$ 10.0000,00

// cargo.dizCargo()
// cargo.dizOi(this.nome)
// pessoa1.dizOi()
// pessoa1.dizCargo()

// funcionario1.dizOi()

// console.log(pessoa1, "Estância de pessoa1")
// console.log(funcionario1, "Estância de funcionário 1")
// console.log(funcionario2, "Estância de funcionário 2")
// console.log(cargo, "Estância de Cargo")