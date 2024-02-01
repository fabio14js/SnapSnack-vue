<script setup>
import { ref } from "vue";

import VLazyImage from "v-lazy-image";

const input = ref("");
</script>

<template>
  <div class="head-hero py-10 relative" style="box-shadow: 0 6px 5px -2px rgba(128, 128, 128, 0.438)">
    <VLazyImage draggable="false" class="hero-img hero-img-1 max-w-full hidden md:inline-block" src="/coffee.png" alt="coffee" />
    <VLazyImage draggable="false" class="hero-img hero-img-2 max-w-full hidden lg:inline-block" src="/donut.png" alt="donut" />
    <VLazyImage draggable="false" class="hero-img hero-img-3 max-w-full" src="/gamberi-tempura.png" alt="tempura" />
    <VLazyImage draggable="false" class="hero-img hero-img-4 max-w-full" src="/icecream.png" alt="icecream" />
    <VLazyImage draggable="false" class="hero-img hero-img-5 max-w-full" src="/meat.png" alt="meat" />
    <VLazyImage draggable="false" class="hero-img hero-img-6 max-w-full hidden lg:inline-block" src="/nigiri.png" alt="nigiri" />

    <section class="container mx-auto transition-all duration-200 px-6">
      <div class="flex items-center justify-center flex-col gap-10">
        <h1 id="title" class="text-[#FFD700] text-[35px] sm:text-[40px] md:text-[49px] text-center font-bold max-w-[800px] z-10 drop-shadow-2xl">
          Ordina dal tuo divano e noi pensiamo al resto
        </h1>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 text-gray-400">
            <font-awesome-icon icon="fa-solid fa-utensils" />
          </div>
          <input
            type="text"
            id="input-group-1"
            v-model="input"
            class="z-10 w-[370px] border-4 border-[#FFA500] text-base rounded-lg hover:border-[#FFD700] focus:outline-none block ps-10 p-2.5"
            placeholder="Inserisci il nome del tuo ristorante preferito"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.v-lazy-image {
  filter: blur(5px);
  transition: filter 0.8s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}

.head-hero {
  background-color: wheat;
}

#title {
  color: #b99768a9;
  line-height: 1.1;
  font-family: Arial Black, Gadget, sans-serif;
  text-shadow: 0px 0px 0 rgb(147, 113, 66), -1px 1px 0 rgb(109, 75, 28), -2px 2px 0 rgb(71, 37, 0), -3px 3px 2px rgba(77, 53, 29, 0),
    -3px 3px 1px rgba(77, 53, 29, 0.5), 0px 0px 2px rgba(77, 53, 29, 0.2);
}

@keyframes float {
  from {
    transform: translateY(0px, 0px);
  }
  to {
    transform: translate(-8px, 15px);
  }
}

.images-container {
  width: 100%;
}

.hero-img {
  position: absolute;
  animation: float 2s linear infinite alternate-reverse;
}
.hero-img-1 {
  width: 150px;
  right: 1px;
  top: 0;
  rotate: 45deg;
}

.hero-img-2 {
  width: 150px;
  bottom: 20px;
  right: 190px;
}

.hero-img-3 {
  width: 150px;
  left: 1px;
  bottom: 20px;
}

.hero-img-4 {
  width: 150px;
  bottom: 20px;
  left: 450px;
}

.hero-img-5 {
  width: 150px;
  top: 0;
  left: 270px;
}

.hero-img-6 {
  width: 150px;
  top: 0;
  right: 300px;
}
</style>
