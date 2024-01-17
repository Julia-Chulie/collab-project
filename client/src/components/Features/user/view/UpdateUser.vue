<script setup>
import {onBeforeMount, onMounted, ref} from "vue";
import {createUser, updateUser} from "../../../../shared/api/user.api.js";
import swal from "sweetalert2";
import {useAuthStore} from "../store/authStore.js";
import moment from "moment";

const authStore = useAuthStore()


const gender = ref(authStore.userById.gender);
const category = ref(authStore.userById.category);
const firstName = ref(authStore.userById.firstname);
const lastName = ref(authStore.userById.lastname);
const email = ref(authStore.userById.email);
const password = ref('');
const confirmPassword = ref('')
const phone = ref(authStore.userById.phone);
const birthdate = ref(moment(authStore.userById.birthdate).format('YYYY-MM-DD'));
const city = ref(authStore.userById.city);
const country = ref(authStore.userById.country);
const photo = ref(authStore.userById.photo);

console.log(useAuthStore().userById)

const error = ref("")

const updateUserFunc = (id, user) => {
  updateUser(id, user)
      .then(() => {
        swal.fire({
          title: 'Utilisateur modifié',
          text: 'L\'utilisateur a bien été modifié',
          icon: 'success',
          confirmButtonText: 'Fermer'
        })
      })
      .catch((err) => {
        error.value = err.response?.data.error
      })
}

const updateUserForm = () => {
  if (password.value.length < 8) {
    const user = {
      gender: gender.value,
      category: category.value,
      firstname: firstName.value,
      lastname: lastName.value,
      email: email.value,
      phone: phone.value,
      birthdate: birthdate.value,
      city: city.value,
      country: country.value,
      photo: photo.value
    }
    updateUserFunc(authStore.userById._id, user)
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
    if (confirmPassword.value !== password.value) {
      error.value = "Les mots de passe ne correspondent pas"
    } else {
      error.value = ""
      updateUserFunc(authStore.userById._id, user)
    }
  }

}
</script>

<template>

  <main class="flex items-center justify-center py-[100px] w-full h-full">
    <div class="flex flex-col gap-10 text-center items-center justify-center w-full">
      <h1 class="text-5xl font-bold" v-if="authStore.userById?._id === authStore.currentUser._id">Modifier mon
        profil</h1>
      <h1 class="text-5xl font-bold" v-else>Modifier un utilisateur</h1>
      <hr class="h-[2px] bg-gray-200 w-2/3">

      <form @submit.prevent="updateUserForm" class="w-full mt-[50px]">
        <div v-if="error !== ''" class="text-red-500 w-full text-center text-lg font-bold mb-4">{{ error }}</div>
        <div class="w-full flex flex-row items-center justify-center gap-4">
          <div class="flex flex-col items-center gap-5 justify-center text-right text-xl h-10">
            <label for="gender" class="w-full h-10">*Civilité : </label>
            <label for="category" class="w-full h-10">*Catégorie : </label>
            <label for="firstName" class="w-full h-10">*Prénom : </label>
            <label for="lastName" class="w-full h-10">*Nom : </label>
            <label for="email" class="w-full h-10">*Email : </label>
            <label for="password" class="w-full h-10">Mot de passe : </label>
            <label for="confirmPassword" class="w-full h-10">Confirmation : </label>
            <label for="phone" class="w-full h-10">*Téléphone : </label>
            <label for="birthdate" class="w-full h-10">*Date de naissance : </label>
            <label for="city" class="w-full h-10">*Ville : </label>
            <label for="country" class="w-full h-10">*Pays : </label>
            <label for="photo" class="w-full h-10">*Url de la photo : </label>
          </div>
          <div class="flex flex-col items-center gap-2 justify-center w-1/3">
            <select name="gender" v-model="gender" class="border-[1px] border-gray-400 w-full h-10" required>
              <option value="male">Homme</option>
              <option value="female" selected>Femme</option>
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
                   placeholder="(min 8 caractères)">
            <input type="password" id="confirmPassword" v-model="confirmPassword"
                   class="border-[1px] border-gray-400 p-2 w-full h-10"
                   placeholder="(min 8 caractères)">

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
        <button type="submit" class="p-5 font-bold bg-red-500 text-white w-max text-xl mt-5">MODIFIER</button>
      </form>
    </div>
  </main>

</template>

<style scoped>

</style>