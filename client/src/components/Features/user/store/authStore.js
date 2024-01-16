import {defineStore} from "pinia";
import authStorageService from "./authStorage.js";
import {loginApi} from '../../../../shared/api/auth.api'

import {jwtDecode} from "jwt-decode";
import {fetchCurrentUser, fetchUserById} from "../../../../shared/api/user.api";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        currentUser: null,
        userById: null,
        loaded: false,
        loadedUserById: false,
        loading: false,
    }),

    getters: {
        isAuthenticated(state) {
            if (state.currentUser) {
                return true;
            } else if (!state.currentUser && state.loaded) {
                return false;
            } else {
                return null;
            }
        },
    },

//    karim.benzema@gmail.com
    actions: {
        async login(user) {
            console.log('user',user);
            try {
                this.loading = true;
                const response = await loginApi(user)
                console.log(user);
                const token = response.data.token;
                const decodedtoken = jwtDecode(token);
                authStorageService.saveToken(token);

            } catch (error) {
               console.log(error);
                throw error
            }
        },
        logout() {
            authStorageService.removeToken();
            this.currentUser = null;
        },


    },
})