<script setup>
import { useAuthStore } from '../Features/user/store/authStore';
import CollaborateurCard from '../Home/CollaborateurCard.vue';
</script>

<template>
    <CollaborateurCard v-for="user in users" :key="user.id" :item="user" />
</template>

<style scoped>

</style>