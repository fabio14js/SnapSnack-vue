<script setup>
defineProps({
  image: String,
});
</script>

<template>
  <a class="flex flex-col justify-between items-center drop-shadow-lg flex-shrink-0 gap-4 h-[200px] bg-[#ff6347ea] rounded-lg">
    <img draggable="false" class="w-[180px] mt-5 drop-shadow-md h-full object-scale-down p-1 flex-grow" :src="image" alt="Immagine" />
    <div class="bg-white rounded-b-lg w-full py-2">
      <h3 class="text-center">Rosticceria</h3>
    </div>
  </a>
</template>
