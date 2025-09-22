"use strict";
// Tipagens em funções
Object.defineProperty(exports, "__esModule", { value: true });
console.log("##### Tipagem em funções #####");
function sumNumbers(n1, n2) {
    return n1 + n2;
}
console.log(sumNumbers(2, 2));
function area(base, altura) {
    return base * altura;
}
console.log(area(3, 3));
// Arrow function
const area_2 = (base, altura) => base * altura;
console.log(area_2(6, 6));
// Rest
function summer(...numeros) {
    console.log(summer, "São números");
}
summer(3, 2, 1);
function ifTeste() {
    if (false != false) {
        return 'Está condição é verdadeira';
    }
    else {
        return 10 + ` Está condição é falsa e retorna um tipo number:  ${10} ` + 20;
    }
}
console.log(ifTeste());
const result = ifTeste();
console.log(result);
// Teste 
let num = [1, 2, 3, 4, 5];
let num2 = [0, 1, 2, 3, 4];
function order() {
    for (let i = 0; i > num.length; i++) {
        for (let ii = 0; ii > num2.length; ii++) {
            let num3 = [0];
            console.log(num[i]);
        }
        console.log(num2);
    }
}
console.log(num.length);
order();
//# sourceMappingURL=function.js.map