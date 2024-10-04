//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/posts',
        name: 'posts.index',
        component: () => import('../views/posts/Index.vue')
    },
    {
        path: '/create',
        name: 'posts.create',
        component: () => import('../views/posts/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'posts.edit',
        component: () => import('../views/posts/Edit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router