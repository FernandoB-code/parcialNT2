import Vue from 'vue'
import VueRouter from 'vue-router'

import Ingreso from './componentes/Ingreso.vue'
import Respuesta from './componentes/Respuesta.vue'

Vue.use(VueRouter)

export const router = new VueRouter({

    mode: 'history',
    routes: [
        {path: '/', redirect: '/ingreso'},
        {path: '/ingreso', component: Ingreso},
        {path: '/respuestas', component: Respuesta}
    ]
})