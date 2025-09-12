const notasAlunos = new Map()

notasAlunos.set("Ana", 10)
notasAlunos.set("Bruno", 6)
notasAlunos.set("Carla", 8)
notasAlunos.set("Dniel", 9)
notasAlunos.set("Eduardo", 5)
notasAlunos.set("Felipe", 3)
notasAlunos.set("Gabriela", 5)




console.log("Alunos Aprovados")
for (let [aluno, nota] of notasAlunos.entries()){
    if (nota >= 6){
            console.log(`O(a) aluno(a) ${aluno}, tirou nota ${nota}. Está Aprovado`)
    }
}

console.log("Alunos Reprovados")
for (let [aluno, nota] of notasAlunos.entries()){
    if (nota < 6){
            console.log(`O(a) aluno(a) ${aluno}, tirou nota ${nota}. Está Reprovado`)
    }

}