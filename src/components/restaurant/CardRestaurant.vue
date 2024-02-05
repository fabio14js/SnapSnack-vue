<script setup>
import { ref } from "vue";
import axios from "axios";

const restaurant = ref([]);
const dishes = ref([]);

axios.get(`http://127.0.0.1:8000/api/restaurant/yuzu-sushi`).then((res) => {
    restaurant.value = res.data.restaurant;
    console.log(restaurant.value)
}) 
axios.get(`http://127.0.0.1:8000/api/dishes`).then((res) => {
    dishes.value = res.data.dishes;
    
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
    <div :style="{ backgroundImage: `url(${restaurant.photo})` }" class="w-[1200px] rounded shadow-lg flex justify-center items-center flex-col border p-6 mb-10">        
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
    
    <div class="w-[1200px] border p-4 rounded-full flex justify-around gap-10 text-xl mb-10 shadow-md">
        <button @click.prevent="changeShowingStatus ('menu')" class="line-orange menu cursor-pointer p-4 relative">Menu</button>
        <button @click.prevent="changeShowingStatus ('info')" class="line-orange info cursor-pointer p-4 relative">Info</button>
    </div>

    <div v-show="isShowingMenu" v-for="dish in dishes" class="flex flex-col justify-center w-[1200px] mb-8">
        <h2 class="font-bold text-3xl mb-2">Tipo di piatto</h2>
        <div class="border rounded-md p-6 hover:shadow-lg cursor-pointer transition-all duration-300">
            <img src="" alt="">
            <p class="text-xl">{{ dish.name }}</p>
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