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

// function Funcionario(nome, funcao, valor){
//     this.colaborador = nome
//     this.cargo = funcao
//     let _salario = valor

//     this.iniValor = function(){
//         return _salario
//     }

//     this.getValor = function(){
//         return `O${teste} salário de ${nome} é ${_salario}`
//     }

//     this.setValor = function(valor){
//         _salario = valor
//     }
// }

// console.log(funcionario1.getValor()) // Mostra o valor de R$ 7.000,00
// funcionario1.setValor(70000) // Atribui um novo valor de R$ 10.0000,00





//################ Polimorfismo ###########################################
function Pessoa(nome, anos){
    this.pessoa = nome
    this.idade = anos
}

function Funcionario(nome, idade, funcao, valor){
    
    // this.colaborador = nome 
    Pessoa.call(this, nome, idade)
    this.cargo = funcao
    let _salario = valor

    this.getValor = function(){
        return _salario
    }

    this.setValor = function(valor){
        _salario = valor
    }

    this.aumento = function(){ //Função polimorfica
        const novoSal = this.getValor() * 1.1
        this.setValor(novoSal)
    }

    console.log("Teste dentro de Funcionário")
}

function Estagiario(nome){

    Funcionario.call(this, nome, 35, "Estagiário", 2000)

    this.aumento = function(){ //Função polimorfica
        const novoSal = this.getValor() * 1.08
        this.setValor(novoSal)

        console.log(`${nome} receberá ${"R$ "+ novoSal + ",00"}`)

    }
}

// ############################ Objetos #########################################

const pessoa1 = new Pessoa("José", "30")
const funcionario1 = new Funcionario("Pedro", 30, "Carpinteiro", 70000)
const funcionario2 = new Estagiario("Lucas")

// const cargo = new Funcionario("Obreiro"," R$ 3.000,00")
// console.log(funcionario1.iniValor())

funcionario1.aumento()
console.log(funcionario1.getValor())


funcionario2.aumento()
console.log(funcionario2.getValor())

// cargo.dizCargo()
// cargo.dizOi(this.nome)
// pessoa1.dizOi()
// pessoa1.dizCargo()

// funcionario1.dizOi()

// console.log(pessoa1, "Estância de pessoa1")
// console.log(funcionario1, "Estância de funcionário 1")
// console.log(funcionario2, "Estância de funcionário 2")
// console.log(cargo, "Estância de Cargo")