// Objetos customizados com tipos em TypeScript 

const alunos = [
    { nome: "João", idade: 20, curso: ["Engenharia", "Matemática"] },
    { nome: "Maria", idade: 22, curso: ["Medicina", "Biologia"] },
    { nome: "Pedro", idade: 21, curso:["Direito", "História"] }
]

// alunos.push("Ana") // Erro de compilação
// alunos.push({ nome: "Ana", idade: 19 }) // Erro de compilação
alunos.push({ nome: "Ana", idade: 19, curso: ["Filosofia"]}) // Correto

console.log(alunos)

console.log('#### Tipos Customizados ###')

type aluno = {
    nome: string,
    idade: number,
    curso: string[]
}

const alunos2: aluno[] = [
    { nome: "Pedro", idade: 21, curso: ["Direito", "História"] },
    { nome: "Ester", idade: 23, curso: ["Administração", "Economia"] }
]

console.log(alunos2)

// Propriedades opcionais 
console.log('#### Criando um novo tipo aluno ###')

type alunoOp = {
    nome: string,
    idade: number,
    curso?: string[] // Propriedade opcional, pode ou não ser passada ao criar o objeto
}

const novoAluno: alunoOp = {
    nome: "Tiago",
    idade: 35
    // curso, pode ser omitido ao criar o objeto
}

console.log(novoAluno)
console.log(novoAluno.curso) // undefined
console.log(novoAluno.idade) // 35