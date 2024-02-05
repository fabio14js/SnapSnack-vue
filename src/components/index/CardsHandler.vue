<script setup>
import { ref, onMounted } from "vue";
import Card from "./Card.vue";
import { useScroll } from "@vueuse/core";

const products = ref([
  {
    title: "Hamburger",
    image: "/hamburger.png",
  },
  {
    title: "Italiano",
    image: "/pasta.png",
  },
  {
    title: "Fritti",
    image: "/fries.png",
  },
  {
    title: "Kebab",
    image: "/kebab.png",
  },
  {
    title: "Arancini",
    image: "/arancini.png",
  },
  {
    title: "Pizza",
    image: "/pizza.png",
  },
  {
    title: "Sushi",
    image: "/sushi.png",
  },
  {
    title: "Spesa",
    image: "/shopping-bag.png",
  },
]);

function coords(el) {
  let coords = el.getBoundingClientRect();
  return {
    x: coords.left,
    y: coords.top,
  };
}

function mousemove(e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  let card = e.currentTarget;

  let card_image = card.querySelector("#card_image");
  let img_x = mouseX - coords(card_image).x;
  let img_y = mouseY - coords(card_image).y;
  requestAnimationFrame(() => {
    card_image.style.transform = `translateY(-${img_y / 25 - 2}px) translateX(-${img_x / 20}px) translateZ(100px)`;
  });
}

const sliderPosition = ref(null);
const slider = ref(null);
const { x, y } = useScroll(slider, { behavior: "smooth" });

onMounted(() => {
  x.value = 0;
  sliderPosition.value = "start";
});

function moveTo(direction) {
  if (direction === "right") {
    x.value = 999;
    sliderPosition.value = "end";
  } else if (direction === "left") {
    x.value = 0;
    sliderPosition.value = "start";
  }
}
</script>

<template>
  <section class="container mt-20 my-0 mx-auto transition-all duration-200 px-6 relative">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl md:text-4xl font-bold">Le cucine più amate</h2>
      <span class="text-lg md:text-xl">Trova le cucine più amate dai ristoranti nella tua zona e ordina online a domicilio. </span>
      <div
        ref="slider"
        @mouseenter=""
        class="lg:overflow-x-auto lg:whitespace-nowrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-4 lg:flex gap-8 md:gap-6 lg:gap-10 lg:items-center no-overflow px-10 md:px-2 py-4"
      >
        <Card @mousemove.prevent="mousemove" id="card" v-for="(i, index) in products.length" :title="products[index].title" :image="products[index].image" />
      </div>
      <div class="items-center justify-around hidden lg:flex 2xl:hidden">
        <div class="p-4">
          <font-awesome-icon
            @click.prevent="moveTo('left')"
            class="text-[#ffd900e1] transition-all duration-300 drop-shadow text-4xl"
            :class="sliderPosition === 'end' ? 'hover:text-[#FFD700] cursor-pointer hover:scale-110 hover:drop-shadow-lg' : 'cursor-not-allowed opacity-60'"
            :icon="['fas', 'circle-arrow-left']"
          />
        </div>
        <div class="flex items-center gap-2">
          <font-awesome-icon
            :class="sliderPosition === 'start' ? ' scale-150 text-gray-500' : 'text-gray-400'"
            @click.prevent="moveTo('left')"
            class="text-[10px] cursor-pointer scale-105 drop-shadow-sm transition-all duration-200"
            :icon="['fas', 'circle-dot']"
          />
          <font-awesome-icon
            :class="sliderPosition === 'end' ? ' scale-150 text-gray-500' : 'text-gray-400'"
            @click.prevent="moveTo('right')"
            class="text-[10px] cursor-pointer text-gray-400 scale-105 drop-shadow-sm duration-200"
            :icon="['fas', 'circle-dot']"
          />
        </div>
        <div class="p-4">
          <font-awesome-icon
            @click.prevent="moveTo('right')"
            class="text-[#ffd900e1] transition-all duration-300 drop-shadow text-4xl"
            :class="sliderPosition === 'start' ? 'hover:text-[#FFD700] cursor-pointer hover:scale-110 hover:drop-shadow-lg' : 'cursor-not-allowed opacity-60'"
            :icon="['fas', 'circle-arrow-right']"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-overflow {
  overflow: hidden;
}
</style>
