import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
            beforeEnter: (to ,from, next) => {
                store.state.login ? next() : next('/signin')
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('./views/Profile.vue'),
            beforeEnter: (to ,from, next) => {
                store.state.login ? next() : next('/signin')
            }
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('./views/Settings.vue'),
            beforeEnter: (to ,from, next) => {
                store.state.login ? next() : next('/signin')
            }
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import('./views/Signin.vue'),
            beforeEnter: (to ,from, next) => {
                !store.state.login ? next() : next('/')
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('./views/Signup.vue'),
            beforeEnter: (to ,from, next) => {
                !store.state.login ? next() : next('/')
            }
        }
    ]
})