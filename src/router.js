import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index'

import store from './store'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: Index,
            children: [
                {
                    path: '',
                    name: 'login',
                    component: () => import('./components/Login')
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('./components/Register')
                },
            ],

        },
        {
            path: '/home',
            name: 'home',
            meta: {
                requiresLogin: true
            },
            component: Home
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin)) {
        store.dispatch('checkLogin').then((isLogin) => {
            if (!isLogin) {
                next('/')
            } else {
                next()
            }
        })
    } else {
        next() // 确保一定要调用 next()
    }
})

export default router
