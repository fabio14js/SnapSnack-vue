<script setup>
defineProps({
  title: String,
  image: String,
});
</script>

<template>
  <a
    href="/"
    class="flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-all duration-200 drop-shadow-lg hover:drop-shadow-md lg:flex-shrink-0 gap-4 h-[180px] bg-[#f5deb3] rounded-lg overflow-hidden"
  >
    <figure class="h-[70%] px-1 w-[150px]">
      <img
        id="card_image"
        draggable="false"
        class="object-cover max-w-[100%] smooth-transition transform scale-100 hover:scale-105"
        :src="image"
        alt="Immagine"
      />
    </figure>
    <h3 class="text-center flex items-center justify-center text-base bg-white rounded-b-lg h-[30%] w-full">{{ title }}</h3>
  </a>
</template>

<style scoped>
.smooth-transition {
  transition: transform 0.1s ease-out;
}
</style>
