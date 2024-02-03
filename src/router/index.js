import { createWebHistory, createRouter } from 'vue-router'
import componenteUno from '@/views/componenteUno.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    {
      path: '/:id',
      name: 'componente',
      component: componenteUno,
    },
  ]
})


export default router
