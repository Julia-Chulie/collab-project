<script setup>
import { useAuthStore } from "../Features/user/store/authStore.js";
import router from "../../router/index.js";
import authStorageService from "../Features/user/store/authStorage.js";
import { onMounted,ref, onBeforeMount, watchEffect } from 'vue';

const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();
  await router.push('/login')
}

const selectedPath = ref('');

watchEffect(() => {
  console.log('router.currentRoute',router.currentRoute.value.fullPath);
  console.log('router.currentRoute',router.currentRoute.value.href);
  selectedPath.value = router.currentRoute.value.fullPath
})

</script>

<template>
  <header>
    <nav style="background-color: #EE4560;" class="flex justify-between items-center text-white h-[60px] px-5">
      <router-link to="/" class="font-bold text-xl"><font-awesome-icon :icon="['fas', 'network-wired']" /><span class="ml-1">Intranet</span></router-link>
      <ul class="flex flex-row gap-4 items-center">
        <li  :class="{ selected: selectedPath === '/users'}">
          <router-link to="/users" v-if="authStore.isAuthenticated"><font-awesome-icon :icon="['fas', 'list']" /><span class="ml-1">Liste</span></router-link>
        </li>
        <li :class="{ selected: selectedPath === '/create-user'}" v-if="authStore.isAuthenticated && authStore.currentUser.isAdmin">
          <router-link to="/create-user"><font-awesome-icon :icon="['fas', 'user-plus']" /><span class="ml-1">Ajouter</span></router-link>
        </li>
        <li>
          <router-link :to="'/update-user/'+authStore.currentUser._id" v-if="authStore.isAuthenticated">
            <img style="width: 48px;height: 48px; border-radius: 50%;" :src="authStore.currentUser.photo" alt="Image de profil">
          </router-link>
        </li>
        <li :class="{ selected: selectedPath === '/login'}">
          <router-link to="/login" v-if="authStore.isAuthenticated" @click="logout()"><font-awesome-icon :icon="['fas', 'right-from-bracket']" /><span class="ml-1">Déconnexion</span></router-link>
          <router-link to="/login" v-else>Connexion</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.selected{
  background-color: #DB264C;
  padding: 1rem
}

</style>