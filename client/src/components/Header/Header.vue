<script setup>
import {useAuthStore} from "../Features/user/store/authStore.js";
import router from "../../router/index.js";

const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();
  await router.push('/login')
}

</script>

<template>
  <header>
    <nav class="flex justify-between bg-red-500 items-center text-white h-[60px] px-5">
      <router-link to="/" class="font-bold text-xl">Intranet</router-link>
      <ul class="flex flex-row gap-20">
        <li>
          <router-link to="/collaborateurs" v-if="authStore.isAuthenticated">Liste</router-link>
        </li>
        <li>
          <router-link to="/logout" v-if="authStore.isAuthenticated" @click="logout()">Déconnexion</router-link>
          <router-link to="/login" v-else>Connexion</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>