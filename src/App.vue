<script setup>
import NavBar from "./components/index/NavBar.vue";
</script>

<template>
  <header class="px-10 bg-black pt-6 relative">
    <NavBar />
  </header>
  
  <main>    
    <router-view></router-view>
  </main>
</template>
