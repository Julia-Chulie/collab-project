import {createRouter, createWebHistory} from "vue-router";
import Home from "../components/Home/Home.vue";
import Login from "../components/Login/Login.vue";
import UpdateUser from "../components/Features/user/view/UpdateUser.vue";

import {useAuthStore} from "../components/Features/user/store/authStore.js";
import {AuthGuardService} from "../shared/guard/auth.guard.js";
import { initialRandomUser } from "../components/Features/user/store/usersStore.js";
import CreateUser from "../components/User/CreateUser.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home, beforeEnter:[AuthGuardService, initialRandomUser]},
        {path: '/login', component: Login},
        {path: '/update/:id', component: UpdateUser},
        {path: '/create-user', component: CreateUser, beforeEnter:[AuthGuardService]}
    ]
})

router.beforeEach(async () => {
    const authStore = useAuthStore()
    if(!authStore.loaded){
        await authStore.fetchCurrentUser();
    }
});

export default router