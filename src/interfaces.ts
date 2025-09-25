class Account {
    accountId: number;
    saldo: number = 0;

    constructor(accountId:number){
        this.accountId = accountId
    }
}

class accountSalary extends Account{
    deposit(amount: number){
        this.saldo += amount;
    }
}

interface Itransaction {// Interface, convenção de nomenclatura com "I" no início do nome. Não é obrigatório, mas é uma boa prática. Não é recomendado passar o código pronto na interface somente a estrutura.
    
    // transactionId(amount, beneficiary){
    //     beneficiary.saldo += amount;
    // }

    transactionId:(amount: number, beneficiary: Account) => boolean;
    taxTransaction: number;
}

interface INumnericBusiness{
    cnpj: number;
}

interface IForm extends INumnericBusiness{
    phoneNumber: number;
}

class AccountTransaction extends Account implements IForm, INumnericBusiness{
    transactionId(amount: number, beneficiary: Account){
        beneficiary.saldo += amount;
        return true;
    };
    taxTransaction: number = 0;
    cnpj: number = 12345678901234;
    phoneNumber: number = 1234567890;     
}

const accountTransaction: IForm = {
    cnpj: 12345678901234,
    phoneNumber: 1234567890
} 

// let accTransaction = new AccountTransaction(1);

// accTransaction.transactionId(100, new Account(2));
const accTransaction = new accountSalary(10);
accTransaction.deposit(100)
console.log(accTransaction);

// const account1 = new Account(1);
// const account2 = new Account(2);

// account1.saldo += 100;
// account2.saldo += 50;
// console.log(account1);
// console.log(account2);
