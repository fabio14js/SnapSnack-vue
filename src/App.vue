<script setup>
import NavBar from "./components/index/NavBar.vue";
</script>

<template>
  <header class="px-10 bg-black">
    <NavBar />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>
