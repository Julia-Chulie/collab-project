import {fetchUsers} from "../../../../shared/api/user.api.js";
import { fetchRandomUser } from "../../../../shared/api/user.api.js";
import {defineStore} from "pinia";

export const useUsersStore = defineStore('usersStore', {
    state: () => ({
        users: [],
        user: {},
        loaded: false,
        loadUserRandom: false,
        randomUser:{}
    }),

    getters: {
        getUsers() {
            return state.users.value
        }
    },

    actions: {
        async fetchUsers() {
            this.loaded = false
            const users = await fetchUsers();
            this.users = users;
            this.loaded = true
        },
        async fetchRandomUser() {
            this.loadUserRandom = false
            const randomUser = await fetchRandomUser();
            this.randomUser = randomUser;
            this.loadUserRandom = true
        }
    },
})

export async function initialRandomUser() {
    const store = useUsersStore();
    if (!store.loadUserRandom) {
        await store.fetchRandomUser();
        store.loadUserRandom = true;
    }
}

export async function initialFetchUsers() {
    const store = useUsersStore();
    if (!store.loaded) {
        await store.fetchUsers();
        store.loaded = true;
    }
}