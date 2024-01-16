<script setup>
import {useAuthStore} from "../Features/user/store/authStore.js";
import {useUsersStore} from "../Features/user/store/usersStore.js";
import router from "../../router/index.js";
import {onMounted} from "vue";
import CollaborateurCard from "./CollaborateurCard.vue";

const authStore = useAuthStore()
const usersStore = useUsersStore()
// const item =  {
//   id: 1,
//   firstname : "Jean",
//   lastname: "Dupont",
//   age: 25,
//   city: "Paris",
//   country: "France",
//   email: "test@test.fr",
//   phone: "06 06 06 06 06",
//   birthdate: "1996-06-06",
//   category: "Développeur"

// }

const sayHello = async () => {
  try {
    await usersStore.fetchRandomUser()
  } catch(error){
    console.log("bruh");
  }
}

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

      <CollaborateurCard :item=usersStore.randomUser />
      <button @click="sayHello" class="p-5 font-bold bg-red-500 text-white w-max text-xl">DIRE BONJOUR À QUELQU'UN D'AUTRE</button>
    </div>
  </main>
</template>

<style scoped>

</style>