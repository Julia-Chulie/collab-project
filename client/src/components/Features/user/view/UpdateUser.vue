<script setup>
import {useAuthStore} from "../store/authStore.js";
import {useUsersStore} from "../store/usersStore.js";
import {onMounted} from "vue";
import CollaborateurCard from "../../../Home/CollaborateurCard.vue";

const authStore = useAuthStore()
const usersStore = useUsersStore()

</script>

<template>
  <main class="flex items-center justify-center py-[100px] w-full">
    <form>

        <div>
            <label>Nom</label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>

        <div>
            <label>Prénom</label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>

        <div>
            <label>email</label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>

        <div>
            <label>password</label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>

        <div>
            <label>Ville</label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>

        <div>
            <label>Pays</label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>

        <div>
            <label>Genre</label>
            <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>Genre</option>
                <option>vivant</option>
                <option>pas vivant</option>
            </select>
        </div>

        <div>
            <label>Category</label>
            <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>Category</option>
                <option>Marketing</option>
                <option>Technique</option>
                <option>RH</option>
            </select>
        </div>

    </form>
  </main>
</template>

<style scoped>

</style>