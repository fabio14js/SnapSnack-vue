<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import { store } from "../../store.js";


console.log(store)


const restaurant = ref([]);
const dishes = ref([]);
const input = ref("");



axios.get(`${store.apiUrl}/restaurant/yuzu-sushi`).then((res) => {
    restaurant.value = res.data.restaurant;
    
}) 
axios.get(`${store.apiUrl}/dishes`).then((res) => {
    dishes.value = res.data.dishes;
    
    
}) 

const filteredDishes = computed ( ()=> {
    if (input.value) {
        const tempArray = []
        dishes.value.forEach((dish)=> {
            
            if(dish.name.toLowerCase().includes(input.value.toLowerCase())) {
                tempArray.push(dish)
            }
        })

        
        return tempArray
    }
    
    return dishes.value   

}) 

const isShowingMenu = ref(true);

const changeShowingStatus = (type) => {
    if(type === 'info') {
        isShowingMenu.value = false
    } else if (type === 'menu') {
        isShowingMenu.value = true
    } 
}



</script>

<template>
    
<div class="flex flex-col justify-center items-center py-4">
    <div :style="{ backgroundImage: `url(${restaurant.photo})`} " class="bg-cover lg:w-[1200px] md:w-[800px] sm:w-[400px] rounded shadow-lg flex justify-center items-center flex-col border p-6 mb-10">        
        <div class="px-6 py-4 text-center bg-[#F5DEB3]/[.73] rounded-md shadow-lg">
            <h1 class="font-bold text-6xl mb-2">{{ restaurant.name }}</h1>
            <p class="text-black text-xl">
                {{ restaurant.address }}
            </p>
        </div>
        <div class="bg-zinc-300/[.73] rounded-md p-2 m-2 text-sm flex gap-4 shadow-lg">
            <p>Costo Spedizione <span class="font-bold">3,99 $</span></p>
            <p>Ordina minimo <span class="font-bold">5,99 $</span></p>
         
        </div>
        <div class="px-6 pt-4 pb-2">
            <span v-for="category in restaurant.categories" class="inline-block bg-[#fe6346] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 shadow-lg">{{ category.name }}</span>
           
        </div>
    </div>
    
    <div class="lg:w-[1200px] md:w-[800px] sm:w-[400px] lg:border p-4 lg:rounded-full flex justify-around gap-10 text-xl mb-10 lg:shadow-md">
        <button @click.prevent="changeShowingStatus ('menu')" class="line-orange menu cursor-pointer p-4 relative">Menu</button>
        <button @click.prevent="changeShowingStatus ('info')" class="line-orange info cursor-pointer p-4 relative">Info</button>
    </div>

    <div class="relative flex-grow mb-10">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 text-gray-400">
            <font-awesome-icon icon="fa-solid fa-utensils" />
        </div>
        <input
        type="text"
        id="input-group-1"
        v-model="input"
        class="z-10 w-full border-4 border-[#FFA500] text-base rounded-lg hover:border-[#FFD700] focus:outline-none block ps-10 p-2.5"
        placeholder="Cerca un piatto" />
    </div>
    
    <div v-show="isShowingMenu" v-for="dish in filteredDishes" class="flex flex-col justify-center lg:w-[1200px] md:w-[800px] sm:w-[400px] w-[300px] mb-8">
        <h2 class="font-bold lg:text-3xl text-2xl lg:text-left text-center mb-2">Tipo di piatto</h2>
        <div class="border rounded-md p-6 hover:shadow-lg cursor-pointer transition-all duration-300">
            <img src="" alt="">
            <p class="sm:text-xl text-lg">{{ dish.name }}</p>
            <span class="text-lg font-bold">{{ dish.price }} &euro;</span>
        </div>
    </div>

    <div v-show="!isShowingMenu">
        sezione info
    </div>

</div>


</template>

<style scoped>

:hover.line-orange::after {
    content:'';
    display: block;
    width: 50%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 3px;
    background-color: #ff6246;   
    position: absolute;     
}



</style>