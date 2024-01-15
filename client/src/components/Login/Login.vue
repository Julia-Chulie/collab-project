<script setup>
import {ref} from "vue";
import {useAuthStore} from "../Features/user/store/authStore.js";
import {useRouter} from "vue-router";

const authStore = useAuthStore();
const router = useRouter()

const email = ref('');
const password = ref('');
const login = async () => {
  const user = {
    email: email.value,
    password: password.value
  }
  try{
    await authStore.login(user)
    await router.push('/')
  } catch(err) {
    console.log(err.response?.data.message)
  }

}
</script>

<template>
  <main class="flex items-center justify-center py-[100px] w-full h-full">
    <div class="flex flex-col gap-10 text-center items-center justify-center w-full">
      <h1 class="text-5xl font-bold">Connexion</h1>
      <hr class="h-[2px] bg-gray-200 w-2/3">
      <p class="text-xl">Pour vous connecter à l'intranet, entrez votre identifiant et mot de passe.</p>

      <form @submit.prevent="login" class="w-full mt-[50px]">
        <div class="w-full flex flex-row items-center justify-center gap-4">
          <div class="flex flex-col items-center gap-5 justify-center text-right text-xl">
            <label for="email" class="w-full">Email :</label>
            <label for="password" class="w-full">Mot de passe :</label>
          </div>
          <div class="flex flex-col items-center gap-2 justify-center w-1/3">
            <input type="email" id="email" v-model="email" class="border-2 border-gray-200 p-2 w-full" placeholder="owen.lopez@example.com">
            <input type="password" id="password" v-model="password" class="border-2 border-gray-200 p-2 w-full">
          </div>
        </div>
        <button type="submit" class="p-5 font-bold bg-red-500 text-white w-max text-xl mt-5">CONNEXION</button>
      </form>
    </div>
  </main>
</template>

<style scoped>

</style>