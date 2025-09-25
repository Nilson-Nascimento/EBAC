// Sintaxe de uma classe em JS ES6
// class Pessoa{
//     constructor(name) { // Parameter 'name' implicitly has an 'any' type.ts(7006)
//         this.name = name //Property 'name' does not exist on type 'Pessoa'.ts(2339)
//     }
// }

// const pessoa1 = new Pessoa('João')
// console.log(pessoa1.name) // Property 'name' does not exist on type 'Pessoa'.ts(2339)


// Sintaxe de uma classe em TS

// Modificadores de acesso: public, private, protected e readonly
// public: pode ser acessado de qualquer lugar (padrão), pode ser omitido na declaração.
// private: só pode ser acessado dentro da própria classe
// protected: só pode ser acessado dentro da própria classe e por classes que herdam dela
// readonly: só pode ser lido, não pode ser alterado
// static: pertence a classe e não a instância da classe

class Pessoa{
    nome: string
    renda?: number | undefined // Propriedade opcional
    
    constructor(nome:string, renda?: number){ // A Propriedade opcional, deve ser declarada como opcional também no construtor e não permitido antes de uma propriedade obrigatória.
        this.nome = nome
        this.renda = renda
    }

    dizOla(): string{
        return `Olá, meu nome é ${this.nome}`
    }

    dizRenda(): string{
        return `A renda de ${this.nome} é ${this.renda}. `
    }
}

const person1 = new Pessoa("João")
console.log(person1.dizOla())

const person2 = new Pessoa("Maria", 500)
console.log(person2.dizRenda())
console.log(person2.renda)

class AccountBank{
    protected saldo: number = 0; // só pode ser acessado dentro da própria classe e por classes que herdam dela
    accounteNumber: number;

    constructor(accounteNumber: number){
        this.accounteNumber = accounteNumber
        // this.saldo = saldo
    }

    static getBankCode(){// pertence a classe e não a instância da classe, dessa forma só é acessível através da classe accountBank.
        return 123         
    }

    private getSaldo(){
        return this.saldo
    }

    setSaldo(valor: number){
        this.saldo += valor    
    }
}

class PersonalAccount extends AccountBank{
    
    // constructor(saldo: number, accounteNumber: number){
        //     super(saldo, accounteNumber) // Chama o construtor da classe pai
        //     this.saldo = saldo // Acesso permitido por ser uma classe que herda de AccountBank
        // }
        
        setSaldo(valor:number): void{
            this.saldo += valor // Acesso permitido por ser uma classe que herda de AccountBank
        }
    }
    
    const pedroAccount = new PersonalAccount(1234)
    pedroAccount.setSaldo(1000)
    // console.log(`Seu saldo é ${pedroAccount.getSaldo()}, o número da conta é ${pedroAccount.accounteNumber}`)
    console.log(AccountBank.getBankCode())
