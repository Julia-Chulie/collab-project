<script setup>
import { useAuthStore } from '../Features/user/store/authStore';
import { useUsersStore } from '../Features/user/store/usersStore';
import CollaborateurCard from '../Home/CollaborateurCard.vue';
import {reactive} from 'vue';
const usersStore = useUsersStore()
const filter = reactive({
    
})

</script>

<template>
    <div class="flex flex-row justify-center m-3 items-center">
        <div class="flex flex-row">
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="flex flex-row">
            <label class="w-56">Rechercher par :</label>
            <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>Rechercher par</option>
                <option>Nom</option>
                <option>localisation</option>
            </select>
        </div>

        <div class="flex flex-row">
            <label>Category</label>
            <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>Category</option>
                <option>Marketing</option>
                <option>Technique</option>
                <option>client</option>
            </select>
        </div>
    </div>
    <div class="flex flex-row flex-wrap justify-center">
        <CollaborateurCard v-for="user in usersStore.users" :key="user._id" :item="user" />
    </div>
</template>

<style scoped>

select{
    border:2px solid black
}
</style>