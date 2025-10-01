<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import dados from './components/dados.vue'

import {ref} from 'vue'

const trueOrFalse = ref(true)
const name = 'EBAC'
// Forma tradicional de manipular o DOM
// document.getElementById("dom").innerHTML = "Hello Word" + name

// Forma do Vue de manipular o DOM
const msg = `Hello Word ${name}`

// Interpolação de objetos
const myObject = {
  name: 'Pedro',
  course: 'Vue.js'
}

// Interpolação de funções
function sayHello(){
  return `${name}, seja bem vindo!`
}

function sayHello2(name){
  return `${name}, seja bem vindo!`
}

function soma(a, b){
  return a + b
}

// Importação de imagens
const imageImport = 'https://vuejs.org/images/logo.png'
const imageLocal = 'https://vuejs.org/images/logo.png'

const disableButton = true

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->

  <h1 id="dom"></h1>

  <h1>{{ msg }}</h1>
  
  <h3>Interpolação de funções</h3>
  <h2>{{ myObject.course}}</h2>
  <p>{{ "Quanto é: 10 + 10 = " + (10 + 10) }}</p>
  
  <h3>Interpolação de funções</h3>
  <P>{{ sayHello() }}</P>
  <P>{{ sayHello2("André") }}</P>
  <p>{{ soma(7,7) }}</p>

  <h3>Importação de imagens</h3>
  <img v-bind:src="imageImport" alt="Vue logo" width="125" height="125" />

  <img :src="imageImport" alt="vue logo" width="25" height="25" />
  <br />
  <button :disabled="disableButton">Click aqui</button>
  <br>
  <button @click="trueOrFalse = !trueOrFalse">Click aqui
  </button>

  <h1 v-if="trueOrFalse">
    <img v-bind:src="imageImport" alt="Vue logo" width="125" height="125" />
  </h1>
  <h1 v-else>
    <!-- <img :src="imageLocal" alt="Vue logo" width="125" height="125"> -->
    <svg data-v-45079adc="" class="logo" viewBox="0 0 128 128" width="24" height="24"><path data-v-45079adc="" fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"></path><path data-v-45079adc="" fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"></path></svg>
  </h1>

  <div>
    <h1>
      <h6><dados /></h6>
    </h1>
  </div>
  
</template>



<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
