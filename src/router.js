import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('./views/Inicio.vue')
    },
    {
      path: '/facultad',
      name: 'facultad',
      component: () => import('./views/Facultad.vue')
    },
    {
      path: '/licenciaturas',
      name: 'licenciaturas',
      component: () => import('./views/Licenciaturas.vue')
    },
    {
      path: '/alumnos',
      name: 'alumnos',
      component: () => import('./views/Alumnos.vue')
    },
    {
      path: '/profesores',
      name: 'profesores',
      component: () => import('./views/Profesores.vue')
    },
    {
      path: '/exafcfm',
      name: 'exafcfm',
      component: () => import('./views/Exafcfm.vue')
    },
    {
      path: '/posgrado',
      name: 'posgrado',
      component: () => import('./views/Posgrado.vue')
    }
  ]
})
