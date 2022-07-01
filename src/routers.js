import Home from "./components/Home.vue"
import SignUp from "./components/SignUp.vue"
import Login from "./components/Login.vue"
import AddRestuarant from "./components/AddRestuarant.vue"
import ShowRestuarant from "./components/ShowRestuarant.vue"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        name: 'Home',
        component: Home,
        path: "/"
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: 'LogIn',
        component: Login,
        path: "/login"
    },
    {
        name: 'AddRestuarant',
        component: AddRestuarant,
        path: "/add"
    },
    {
        name: 'ShowRestuarant',
        component: ShowRestuarant,
        path: "/show/:id"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;