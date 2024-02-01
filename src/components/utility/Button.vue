<script setup>
defineProps({
  text: String,
  link: String,
  icon: String,
});
</script>

<template>
  <a :href="link" class="bg-white text-black rounded-md p-2 px-3 flex items-center gap-2 drop-shadow-lg">
    <font-awesome-icon :icon="icon" v-if="icon" class="text-[#FFA500]" />
    {{ text }}
  </a>
</template>
