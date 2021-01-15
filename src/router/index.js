import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // {
    //     path: '/',
    //     redirect: '/pizza'
    // },
    {
        path: '/',
        component: () => import('@/components/Pizza.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router