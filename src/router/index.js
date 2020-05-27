import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Patterns from '../views/Patterns.vue'
import Pattern from '../views/Pattern.vue'
import Create from '../views/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/patterns',
    name: 'Patterns',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Patterns
  },
  {
    path: '/patterns/:id',
    component: Pattern
  },
  {
    path: '/currentPattern',
    name: 'Current Pattern',
    component: () => import(/* webpackChunkName: "about" */ '../views/CurrentProject.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
