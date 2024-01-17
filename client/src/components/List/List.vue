<script setup>
import { useAuthStore } from '../Features/user/store/authStore';
import { useUsersStore } from '../Features/user/store/usersStore';
import CollaborateurCard from '../Home/CollaborateurCard.vue';
import {reactive, computed, ref,watchEffect} from 'vue';

const usersStore = useUsersStore()

const filters = ref({
    keyword:'name',
    search:'',
    category: '',

});

const resetFilter = () => {
  filters.value.category = '';
}

const filteredUsers= computed(() => {
  
  return usersStore.users.filter(user => {
    const categoryMatch = !filters.value.category || user.category.toLowerCase().includes(filters.value.category.toLowerCase());
    const nameMatch = !filters.value.search || user.lastname.toLowerCase().includes(filters.value.search.toLowerCase())   ||  user.firstname.toLowerCase().includes(filters.value.search.toLowerCase()) ;
    const localisationMatch = !filters.value.search 
        || user.city.toLowerCase().includes(filters.value.search.toLowerCase()) 
        ||  user.country.toLowerCase().includes(filters.value.search.toLowerCase()) ;
    if (filters.value.keyword === 'name') {
        return categoryMatch && nameMatch
    }
    else if(filters.value.keyword === 'localisation') {
        return categoryMatch && localisationMatch
    } else {
        return categoryMatch
    }
  });
});


watchEffect(() => {
    console.log(filteredUsers);
})

</script>

<template>
    <main class="flex items-center justify-center py-[50px] w-full h-full">
        <div class="flex flex-col gap-10 text-center items-center justify-center w-full">
            <h1 class="text-5xl font-bold">Liste des collaborateurs</h1>
            <hr class="h-[2px] bg-gray-200 w-2/3">
            <section class="flex flex-row justify-evenly m-3 items-center">
                <div class="flex flex-row ">
                    <input type="text" placeholder="Rechercher..." class="input input-bordered w-full max-w-xs " v-model="filters.search" />
                </div>

                <div class="flex flex-row items-center">
                    <label class="w-52">Rechercher par :</label>
                    <select class="select select-bordered w-full max-w-xs" v-model="filters.keyword">
                        <option value="name" selected >Nom</option>
                        <option value="localisation" >localisation</option>
                    </select>
                </div>

                <div class="flex flex-row items-center">
                    <label style="width: 150px;">Categorie :</label>
                    <select class="select select-bordered w-full max-w-xs" v-model="filters.category"> 
                        <option value="" disabled>-Aucun-</option>
                        <option value="client">Client</option>
                        <option value="Marketing" >Marketing</option>
                        <option value="Technique">Technique</option>
                    </select>
                </div>
            </section>

            <div class="flex flex-row flex-wrap justify-center">
                <CollaborateurCard v-for="user in filteredUsers" :key="user._id" :item="user" />
            </div>
        </div>
    </main>
</template>

<style scoped>
select{
    border:1px solid rgb(213, 214, 210);
    height: 2.6rem;
};
section{
    background-color: purple;
}
label{
    font-weight: 20;
    font-size: 0.9rem;
}
input{
    border: 1px solid #EEEEEE;
    height: 2.6rem;
    width: 500px;
    margin-right: 2rem;
    padding-left: 1rem;
}
</style>