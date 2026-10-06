import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../views/inicio.vue'
import Servicios from '../views/servicios.vue'
import DetalleServicio from '../views/detalle_de_servicio.vue'
import Favoritos from '../views/favoritos.vue'
import Contacto from '../views/contacto.vue'
import PaginaNoEncontrada from '../views/pagina_no_encontrada.vue'

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/servicios',
        name: 'Servicios',
        component: Servicios
    },
    {
        path: '/servicios/:id',
        name: 'DetalleServicio',
        component: DetalleServicio
    },
    {
        path: '/favoritos',
        name: 'Favoritos',
        component: Favoritos
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: Contacto
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: PaginaNoEncontrada
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
