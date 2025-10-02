<script setup>
    import {ref} from 'vue'
        const trueOrFalse = ref(true)

    import { reactive } from 'vue';
        const transection = reactive({
            saldo: 10,
            transferido: 0,
            saldoTotal: 1000
        })

    function transectionAmount() {
        // const valorTransferido = e.target.value
        // transection.transferido = parseFloat(valorTransferido)
        return transection.saldoTotal = transection.saldo - transection.transferido
    }

    function fildeInvalido() {
        return transection.saldo < transection.transferido || transection.saldo === 0
    }
</script>

<template>
     <h1 :style="{ color: trueOrFalse ? 'blue' : 'red' }">Estilização condicional</h1>
     <P>Saldo: {{ transection.saldo }}</P>
     <p>Transferido: {{ transection.transferido }}</p>
     <p>Saldo Total: {{ transectionAmount() }}</p>
     <input :class="{ invalido: transection.saldo < transection.transferido || transection.saldo === 0}" type="number" @keyup="evento => transection.transferido = evento.target.value" placeholder="Digite o valor a ser transferido"/>

     <p v-if="!fildeInvalido()">
         <button>Transferir</button>
     </p>
     <p v-else-if="transection.transferido > transection.saldo">Valor Maior que o Saldo</p>
     <p v-else>Seu Saldo é 0</p>
</template>

<style setup>

.invalido{
    outline: red solid 2px;
}
</style>