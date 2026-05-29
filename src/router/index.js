import { createRouter, createWebHistory } from 'vue-router'
import SignUp from "../views/SignUp.vue"



const routes = [
    {
        path: '/',
        component: SignUp
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router