# router_clase2

Proyecto realizado con Vue + Vite

Se realiza una instalación sin Vue Router

## Instalación de vue-router
`npm init vue-router@latest`
## Modificamos el fichero @/src/router/index
Y añadimos router en main.js
También modificamos App.vue para que pueda mostrar los componentes a partir de la url
## Utilizamos useRoute para obtener los parámetros de la url
Modificamos por tanto el index.js del router y añadimos el parámetro

import { useRoute } from 'vue-router'
const route = useRoute()
const { id } = route.params
const { mombre } = route.query
