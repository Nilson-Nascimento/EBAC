<script setup>
import { reactive } from 'vue';


    const counter = reactive({count: 0})
    const mail = reactive({
        email_1: '',
        email_2: ''
    })

    function changeEmail(e) {
        mail.email_2 = e.target.value
        // 
        // console.log(document.querySelector('email_3'))
        
        document.getElementById('email_3').style.color = 'blue'
        
        const email_3 = document.getElementById('email_3')
        console.log(email_3)
        
        if(mail.email_2.length > 5){
            email_3.style.color = 'green'
        } else {
            email_3.style.color = 'red'
        }

    }

</script>

<template>
    <h3>Dados</h3>
    <button @click="counter.count++">+</button>
    <button @click="counter.count--">-</button>
    <div>{{ counter.count + " Contador" }}</div>
    
    <br/>
    <hr style="color: brown; size:2px;" size="3px"/>

    <P>Seu email é: {{ mail.email_1 }}</P>

    <input type="mail" v-model="mail.email_1" placeholder="Digite seu email_1"/>
    <p id="email_3" calss="email_2">
        Seu email é: {{ mail.email_2 }}
    </p>
    
    <!-- <p>
        <input type="email" @keyup="e => mail.email_2 = e.target.value" placeholder="Digite seu email_2"/>
    </p> -->

    <!-- A mesma função da de cima, mas com a função encapsulada em changeEmail -->
    <p id="email_tag_p">
        <input id="input_2" type="email" @keyup="changeEmail" placeholder="Digite seu email_2"/>
    </p>

    <!-- <p id="email_3"> {{ mail.email_2 }}</p> -->
    <!-- @change mostra o conteúdo que esta sendo digitado após sair do campo -->
    <!-- <input type="email" @change="e => mail.email_2 = e.target.value" placeholder="Digite seu email_2"/> -->
</template>

<style setup>

</style>