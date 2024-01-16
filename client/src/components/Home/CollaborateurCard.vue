<script setup>
import {useAuthStore} from "../Features/user/store/authStore.js";
import moment from "moment/min/moment-with-locales";
import 'moment/locale/fr';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

moment.locale('fr')

const props = defineProps(
    {
        item: Object
    }
)
const authStore = useAuthStore();


const deleteUser = (id) => {

}
</script>

<template>
<div class="flex shadow shadow-gray-500">
  <div :style="{ backgroundImage: 'url(' + item.photo + ')' }" class="bg-cover bg-no-repeat w-[200px] bg-center" ></div>
  <div class="flex flex-col justify-center items-start gap-2 p-10 relative">
    <div class="absolute right-0 top-0 p-1 bg-blue-400">{{ item.category }}</div>
    <div>
      <strong>{{ item.firstname }} {{ item.lastname }}</strong>
      <span class="text-gray-400 pl-1">({{ moment().diff(item.birthdate, 'years') }} ans)</span>
    </div>
    <span class="text-gray-400">{{ item.city }}, {{ item.country }}</span>
    <div>
      <font-awesome-icon :icon="['fas', 'envelope']" class="text-gray-500 mr-1"/>
      <a class="text-rose-600 underline" :href="'mailto:' + item.email">{{ item.email }}</a>
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'phone']" class="text-gray-500 mr-1"/>
      <a class="text-rose-600 underline" :href="'tel:' + item.phone">{{ item.phone }}</a>
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'cake-candles']" class="text-gray-500 mr-1"/>
      <a class="text-gray-400">Anniversaire : {{ moment(item.birthdate).format('Do MMM') }}</a>
    </div>
    <div class="flex flex-row gap-2" v-if="authStore.currentUser.isAdmin">
      <button class="p-1 font-bold bg-red-500 text-white mt-2">Modifier</button>
      <button @click="deleteUser(item.id)" class="p-1 font-bold bg-red-500 text-white mt-2">Supprimer</button>
    </div>

  </div>
</div>
</template>

<style scoped>

</style>