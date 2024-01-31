<script setup>
defineProps({
  title: String,
  image: String,
});
</script>

<template>
  <a
    href="/"
    class="flex flex-col cursor-pointer hover:scale-105 transition-all duration-200 justify-between items-center drop-shadow-lg hover:drop-shadow-md lg:flex-shrink-0 gap-4 h-[200px] bg-[#ff6347ea] rounded-lg"
  >
    <img
      id="card_image"
      draggable="false"
      class="w-[180px] smooth-transition mt-5 drop-shadow-md h-full object-scale-down p-1 flex-grow"
      :src="image"
      alt="Immagine"
    />
    <div class="bg-white rounded-b-lg w-full py-2">
      <h3 class="text-center text-base">{{ title }}</h3>
    </div>
  </a>
</template>

<style scoped>
.smooth-transition {
  transition: transform 0.1s ease-out;
}
</style>
