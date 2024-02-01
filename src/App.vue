<script setup>
import NavBar from "./components/index/NavBar.vue";
</script>

<template>
  <header class="px-4 md:px-10 py-5 bg-[wheat] pt-6 sticky top-0 left-0 z-[999] opacity-95">
    <NavBar />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>
