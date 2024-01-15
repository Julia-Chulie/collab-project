import {fetchUsers} from "../../../../shared/api/user.api.js";
import {defineStore} from "pinia";

export const useUsersStore = defineStore('usersStore', {
    state: () => ({
        users: [],
        user: {},
        loaded: false
    }),

    getters: {
        getUsers() {
            return state.users.value
        }
    },

    actions: {
        async fetchUsers() {
            const users = await fetchUsers();
            this.users = users;
        },
    },
})