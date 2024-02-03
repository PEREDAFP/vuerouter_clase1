
<script setup>

import { useRoute } from 'vue-router'
const route = useRoute()

const { id } = route.params
const { apellidos = 'sin apellidos'} = route.query


</script>



<template>
    <h1>Componente {{ id }}</h1>
    <h2>Apellidos; {{ apellidos }}</h2>

   
</template>


<style lang="scss" scoped>

</style>