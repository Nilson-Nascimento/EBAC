<script setup>
    import dados from './dados.vue'
    import { reactive} from 'vue'

    const inputs = reactive({
        names:['Pedro', 'Maria', 'João', 'Ana', 'Lucas', 'Beatriz', 'Gabriel', 'Julia', 'Rafael', 'Mariana'],
        insertNames:''
    })

    function addNames() {
        if(inputs.insertNames.length >= 3){
            inputs.names.push(inputs.insertNames)
            inputs.insertNames = ''
        }else {
            alert('Digite um nome com no minimo 3 caractere' )
        }
    }

</script>
<template>
    <h2>List Redering</h2>
    <ul>
        <li v-for="(names, index) in inputs.names">
           {{ index }} - {{ names }}
        </li>
        <!-- <li>{{ inputs.insertNames }}</li> -->
    </ul>
    <input type="text" placeholder="Digite um nome" @keyup="event => inputs.insertNames = event.target.value"/>
    <button type="button" @click="addNames()">Cadastrar</button>
    
    
</template>

<style setup>
input{
    margin-right: 10px;
}
</style>