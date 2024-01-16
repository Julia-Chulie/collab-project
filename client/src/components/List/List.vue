<script setup>
import { useAuthStore } from '../Features/user/store/authStore';
import { useUsersStore } from '../Features/user/store/usersStore';
import CollaborateurCard from '../Home/CollaborateurCard.vue';

const usersStore = useUsersStore()

</script>

<template>
    <div class="flex flex-row flex-wrap justify-center la-class-de-julia">
        
        <CollaborateurCard v-for="user in usersStore.users" :key="user._id" :item="user" />
    </div>
</template>

<style scoped>
.la-class-de-julia{
    
}
</style>