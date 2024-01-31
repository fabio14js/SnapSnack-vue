<script setup>
import { ref } from "vue";
import Card from "./Card.vue";
import { useScroll } from "@vueuse/core";

const images = ["/hamburger.png", "/pasta.png", "/fries.png", "/kebab.png", "/arancini.png", "/pizza.png", "/sushi.png", "/shopping-bag.png"];

const products = [
  {
    title: "hamburger",
    image: "/hamburger.png",
  },
];
</script>

<template>
  <section class="container my-0 mx-auto transition-all duration-200 px-6">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-bold">Le cucine più amate</h2>
      <span>Trova le cucine più amate dai ristoranti nella tua zona e ordina online a domicilio. </span>
      <div class="overflow-x-auto whitespace-nowrap mt-4 flex gap-10 items-center overflow-hidden py-4">
        <Card v-for="(i, index) in 8" :image="images[index]" />
      </div>
    </div>
  </section>
</template>
