<script setup>
import { onMounted, ref } from "vue";
import NavBar from "./components/index/NavBar.vue";
import Loader from "./components/utility/Loader.vue";
import ContactFooter from "./components/index/ContactFooter.vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<template>
  <header class="px-4 md:px-10 py-5 bg-[wheat] pt-6 sticky top-0 left-0 z-[100] opacity-95 hover:opacity-100 transition-all duration-200">
    <NavBar />
  </header>

  <Transition>
    <Loader v-if="loading" />
  </Transition>
  <main v-show="!loading">
    <router-view></router-view>
  </main>
  <footer class="py-5 pt-6 bg-[#f5deb3]" style="box-shadow: 0px -6px 6px -2px rgba(128, 128, 128, 0.438);">
    <ContactFooter />
  </footer>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
