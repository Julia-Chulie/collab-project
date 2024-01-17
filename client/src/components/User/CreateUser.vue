<script setup>
import {ref} from "vue";
import {createUser} from "../../shared/api/user.api.js";
import swal from "sweetalert2";

const gender = ref("");
const category = ref("");
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const phone = ref("");
const birthdate = ref("");
const city = ref("");
const country = ref("");
const photo = ref("");

const error = ref("")

const createUserForm =  () => {
  if(password.value.length < 8){
    error.value = "Le mot de passe doit contenir au moins 8 caractères"
  } else {
    error.value = ""
    const user = {
      gender: gender.value,
      category: category.value,
      firstname: firstName.value,
      lastname: lastName.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
      birthdate: birthdate.value,
      city: city.value,
      country: country.value,
      photo: photo.value
    }
    createUser(user)
        .then(() => {
          swal.fire({
            title: 'Utilisateur créé',
            text: 'L\'utilisateur a bien été créé',
            icon: 'success',
            confirmButtonText: 'Fermer'
          })
        })
        .catch((err) => {
          error.value = err.response?.data.error
        })
  }

}
</script>

<template>

  <main class="flex items-center justify-center py-[50px] w-full h-full">
    <div class="flex flex-col gap-10 text-center items-center justify-center w-full">
      <h1 class="text-5xl font-bold">Créer un utilisateur</h1>
      <hr class="h-[2px] bg-gray-200 w-2/3">

      <form @submit.prevent="createUserForm" class="w-full mt-[50px]">
        <div v-if="error !== ''" class="text-red-500 w-full text-center text-lg font-bold mb-4">{{ error }}</div>
        <div class="w-full flex flex-row items-center justify-center gap-4">
          <div class="flex flex-col items-center gap-5 justify-center text-right text-xl h-10">
            <label for="gender" class="w-full h-10">*Civilité : </label>
            <label for="category" class="w-full h-10">*Catégorie : </label>
            <label for="firstName" class="w-full h-10">*Prénom : </label>
            <label for="lastName" class="w-full h-10">*Nom : </label>
            <label for="email" class="w-full h-10">*Email : </label>
            <label for="password" class="w-full h-10">*Mot de passe : </label>
            <label for="phone" class="w-full h-10">*Téléphone : </label>
            <label for="birthdate" class="w-full h-10">*Date de naissance : </label>
            <label for="city" class="w-full h-10">*Ville : </label>
            <label for="country" class="w-full h-10">*Pays : </label>
            <label for="photo" class="w-full h-10">*Url de la photo : </label>
          </div>
          <div class="flex flex-col items-center gap-2 justify-center w-1/3">
            <select name="gender" v-model="gender" class="border-[1px] border-gray-400 w-full h-10" required>
              <option value="" disabled selected>Choisir une option</option>
              <option value="male">Homme</option>
              <option value="female">Femme</option>
            </select>
            <select name="category" v-model="category" class="border-[1px] border-gray-400 w-full h-10" required>
              <option value="" disabled selected>Choisir une option</option>
              <option value="Client">Client</option>
              <option value="Marketing">Marketing</option>
              <option value="Technique">Technique</option>
            </select>
            <input type="text" id="lastName" v-model="lastName" class="border-[1px] border-gray-400 p-2 w-full h-10"
                   placeholder="SMITH" required>
            <input type="text" id="firstName" v-model="firstName" class="border-[1px] border-gray-400 p-2 w-full h-10"
                   placeholder="John" required>
            <input type="email" id="email" v-model="email" class="border-[1px] border-gray-400 p-2 w-full h-10"
                   placeholder="john.smith@email.com" required>
            <input type="password" id="password" v-model="password" class="border-[1px] border-gray-400 p-2 w-full h-10"
                   placeholder="(min 8 caractères)" required>
            <input type="text" id="phone" v-model="phone" class="border-[1px] border-gray-400 p-2 w-full h-10"
                   placeholder="0600000000" required>
            <input type="date" id="birthdate" v-model="birthdate" class="border-[1px] border-gray-400 p-2 w-full h-10"
                   placeholder="Date de naissance" required>
            <input type="text" id="city" v-model="city" class="border-[1px] border-gray-400 p-2 w-full h-10"
                   placeholder="Paris" required>
            <input type="text" id="country" v-model="country" class="border-[1px] border-gray-400 p-2 w-full h-10"
                   placeholder="France" required>
            <input type="text" id="photo" v-model="photo" class="border-[1px] border-gray-400 p-2 w-full h-10"
                   placeholder="https://" required>
          </div>
        </div>
        <button type="submit" class="p-5 font-bold text-white w-max text-xl mt-5">AJOUTER</button>
      </form>
    </div>
  </main>

</template>

<style scoped>
button{
  background-color:  #EE4560;
}
</style>