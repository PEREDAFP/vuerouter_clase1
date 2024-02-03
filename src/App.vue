<script setup>

import { RouterView, RouterLink, useRouter } from 'vue-router'
import { store } from '@/store/store.js'

console.log(store.permiso)
/*
const router = useRouter()

const cambiamos = () =>{
  router.push('/componente/1?apellidos=hola')
}
*/
</script>

<template>
  <!--<button @click="cambiamos">Pincha aquí</button>
  <h1>Con Vue Router instalado</h1>

-->
<button @click="store.permiso=!store.permiso">Cambia Permiso</button>
<h1>Permiso: {{  store.permiso }}</h1>

<nav>
  <RouterLink to="/">Inicio</RouterLink>
  <RouterLink to="/componente/2?apellidos=Pereda">Componente</RouterLink>
  <RouterLink to="/conpermiso">Con Permiso</RouterLink>
  
  
</nav>
   <RouterView />   
</template>

<style scoped>

</style>
