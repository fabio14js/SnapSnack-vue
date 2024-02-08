<script setup>
import { defineProps, defineEmits } from 'vue';

const { dish } = defineProps(['dish']);
const emits = defineEmits();

const addToCart = () => {
// Emetti un evento 'addToCart' con il piatto selezionato
emits('addToCart', dish);
};
</script>

<template>
<div class="flex flex-col justify-center w-full mb-8 bg-white hover:scale-[1.02] transition-all duration-300">
    <div @click="addToCart" class="border rounded-md p-6 hover:shadow-lg cursor-pointer transition-all duration-300">    
    <p class="sm:text-xl text-lg">{{ dish.name }}</p>
    <span class="text-lg font-bold">{{ dish.price }} &euro;</span>
    </div>
</div>
</template>


<style scoped>

</style>