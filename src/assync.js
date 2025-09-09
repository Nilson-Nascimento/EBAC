// function heavyFunction(){
//     let execucoes = 0
//     for (let i = 0; i < 100000000; i++){
//         execucoes++
//     }
//     return execucoes
// }

// const { resolve, reject } = require("core-js/fn/promise")

// const { resolve } = require("core-js/fn/promise")

// console.log("Start")
// console.log(heavyFunction())
// console.log("End")


console.log("####################### Promise ########################")

let promiseFunction = new Promise((sucesso, falha) => {

  try{
    let execucoes = 0
    for (let i = 0; i < 1000000000; i++){
      execucoess++
    }
    sucesso (execucoes)
  } catch(e){
    falha("A iteração falhou")
  }

})

// console.log("Start" , "| Bloco Sem  tratamento erro!")
// promiseFunction.then(resultado => console.log(resultado, "| Bloco Sem  tratamento erro!"))
// console.log("End", "| Bloco Sem  tratamento erro!")

// console.log("####################### Promise com Tratamento de erro ########################")
// // Tratando o Erro

// promiseFunction = new Promise((sucesso, falha) => {

//   try{
//     let execucoes = 0
//     for (let i = 0; i < 10000000000; i++){
//       execucoess++ // Provocando o erro
//     }
//     sucesso (execucoes)
//   } catch(e){
//     falha("A iteração falhou")
//   }

// })

// console.log("Start")
// promiseFunction.then(resultado => console.log(resultado)).catch(erro =>   console.log(erro)) // Erro tratado
// console.log("End")


console.log("####################### async await ########################")

// async function mainExecution() {
//   console.log("Start | com async")
// await promiseFunction.then(resultado => console.log(resultado)).catch(erro =>   console.log(erro, "com async")) // Erro tratado
// console.log("End | com async")
// }

// mainExecution()

// outra forma de utilizar o await sem tratamento de erro.

// async function mainExecution(){
//   console.log("Start | com await")
//   const resultado = await promiseFunction
//   console.log(resultado)
//   console.log("End | await")
// }


// #### // outra forma de utilizar o await com tratamento de erro.

// async function mainExecution(){
//   console.log("Start | com await")
//   try {
//     const resultado = await promiseFunction
//   console.log(resultado)
//   } catch(e) {
//     console.log(e)
//   }
//   console.log("End | await")
// } 


// mainExecution()


// #### Passando parâremtros para uma Promisse

const parametersPromisse = (login, passwd) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("setTimeout")
      resolve(`Logado com o usuário: ${login}`)
    }, 3000);
  })
}

async function mainExecution(){
  console.log("Start | com await")
  
  parametersPromisse("usuário", 12345).then(resultado => {
    console.log(resultado)
  }) 

  try {
    const resultado = await promiseFunction
  console.log(resultado)
  } catch(e) {
    console.log(e)
  }
  console.log("End | await")
} 

mainExecution()