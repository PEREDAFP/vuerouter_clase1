import { createWebHistory, createRouter } from 'vue-router'
import componenteUno from '@/views/componenteUno.vue'
import componenteInicio from '@/views/componenteInicio.vue'
import conPermiso from '@/views/conPermiso.vue'
import { store } from '@/store/store.js'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    {
      path: '/componente/:id',
      name: 'componente',
      component: componenteUno,
    
    },
    {
      path: '/',
      name: 'inicio',
      component: componenteInicio,
    },
    {
      path: '/conpermiso',
      name: 'permiso',
      component: conPermiso,
      beforeEnter: (to, from, next)=>{
        store.permiso ? next() : next({ name:'inicio'})
      }
    },
  ]
})



export default router
