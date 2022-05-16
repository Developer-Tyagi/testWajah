import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from '../components/SignupPage';
import SigninPage from '../components/SigninPage'
import HomePage from '../components/HomePage'

Vue.use(VueRouter)

const routes = [
    {
        path: "/HomePage",
        name: "Home",
        component: HomePage
    },
    {
        path: "/SignupPage",
        name: "SignupPage",
        component: SignupPage
    },
    {
        path: "/",
        name: "SigninPage",
        component: SigninPage
    }
]
const router = new VueRouter ({
    mode: "history",
    routes
})

export default router