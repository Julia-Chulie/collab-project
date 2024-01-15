<script setup>
import {useAuthStore} from "../Features/user/store/authStore.js";
import router from "../../router/index.js";
import {onMounted} from "vue";

const authStore = useAuthStore()

onMounted(() => {
  // if(!authStore.isAuthenticated){
  //   router.push('/login')
  // }
})
</script>

<template>
  <main class="flex items-center justify-center py-[100px] w-full">
    <div class="flex flex-col gap-10 text-center items-center justify-center">
      <h1 class="text-5xl font-bold">Bienvenue sur l'intranet</h1>
      <p class="text-xl">La plate-forme de l'entreprise qui vous permet de retrouver tous vos collaborateurs.</p>
     <p class="text-3xl">Avez-vous dis bonjour à : </p>

      <button class="p-5 font-bold bg-red-500 text-white w-max text-xl">DIRE BONJOUR À QUELQU'UN D'AUTRE</button>
    </div>
  </main>
</template>

<style scoped>

</style>