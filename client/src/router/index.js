import {createRouter, createWebHistory} from "vue-router";
import Home from "../components/Home/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
    ]
})

export default router