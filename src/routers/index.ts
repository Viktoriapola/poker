// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router';

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/content'
        },
        {
            path: '/login',
            name: 'Login',
            // @ts-ignore
            component: () => import('@/views/login/login.vue'),
            props: true,
        },
        {
            path: '/content',
            name: 'Content',
            // @ts-ignore
            component: () => import('@/views/content/content.vue'),
            props: true,
        },
    ]
})

export default routers