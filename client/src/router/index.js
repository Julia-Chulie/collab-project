import {createRouter, createWebHistory} from "vue-router";
import Home from "../components/Home/Home.vue";
import Login from "../components/Login/Login.vue";
import {useAuthStore} from "../components/Features/user/store/authStore.js";
import {AuthGuardService} from "../shared/guard/auth.guard.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home, beforeEnter:[AuthGuardService]},
        {path: '/login', component: Login},
    ]
})

router.beforeEach(async () => {
    const authStore = useAuthStore()
    if(!authStore.loaded){
        await authStore.fetchCurrentUser();
    }
});

export default router