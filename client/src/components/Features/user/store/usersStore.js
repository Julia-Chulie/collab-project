import {fetchUsers} from "../../../../shared/api/user.api.js";
import { fetchRandomUser } from "../../../../shared/api/user.api.js";
import {defineStore} from "pinia";

export const useUsersStore = defineStore('usersStore', {
    state: () => ({
        users: [],
        user: {},
        loaded: false,
        randomUser:{}
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
        async fetchRandomUser() {
            this.loaded = true
            const randomUser = await fetchRandomUser();
            this.randomUser = randomUser;
            this.loaded = false
        }
    },
})

export async function initialRandomUser() {
    const store = useUsersStore();
    if (!store.loaded) {
        await store.fetchRandomUser();
        store.loaded = true;
    }
 }