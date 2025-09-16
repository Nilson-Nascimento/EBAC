"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type Boolean
console.log("##### Type Boolean #####");
let itsRain = false;
console.log(itsRain);
// Type number
console.log("##### Type number #####");
let age = 30; // integer
let tall = 1.75; // fração
console.log(age);
console.log(tall);
// Type string
console.log("##### Type string #####");
const nacionality = "brasilian";
console.log(nacionality);
// Type Arrays
console.log("##### Type Arrays #####");
const coworks = ['Pedro', 'André'];
// Arrays com a palavra reservada Array<string>
const tecnology = ['html', 'css', 'js'];
tecnology.push('ts'); // adding iten
console.log(tecnology);
// Array com a palavra reservada readonlyArray
const stringOfArray = ['10', '20', '30'];
const numberOfArray = [40, 50, 60];
// stringOfArray.push() // push itsn't possible with ReadonlyArray
console.log(stringOfArray);
console.log(numberOfArray);
// Type Tuplas
console.log("##### Type Tuplas #####");
const tuplasOfArray = ['Paulo', true, 33];
const person = ['Lucas', true, 30];
console.log(tuplasOfArray);
console.log(person);
// Type Union Type
console.log("##### Type Union Type #####");
let personAge = 25;
console.log(personAge);
personAge = '25 age';
console.log(personAge);
//# sourceMappingURL=tipos_basicos.js.map