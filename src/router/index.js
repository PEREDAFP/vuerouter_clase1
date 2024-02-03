import { createWebHistory, createRouter } from 'vue-router'
import componenteUno from '@/views/componenteUno.vue'
import componenteDos from '@/views/componenteDos.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    {
      path: '/uno',
      name: 'Uno',
      component: componenteUno,
    },
    {
      path: '/dos',
      name: 'Dos',
      component: componenteDos,
    },
  ]
})


export default router
