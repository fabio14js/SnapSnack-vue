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
    card_image.style.transform = `translateY(-${img_y / 30}px) translateX(-${img_x / 30}px) translateZ(100px)`;
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
  <section class="container my-0 mx-auto transition-all duration-200 px-6 relative">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-bold">Le cucine più amate</h2>
      <span>Trova le cucine più amate dai ristoranti nella tua zona e ordina online a domicilio. </span>
      <div
        ref="slider"
        @mouseenter=""
        class="lg:overflow-x-auto lg:whitespace-nowrap grid grid-cols-2 md:grid-cols-4 mt-4 lg:flex gap-8 md:gap-6 lg:gap-10 lg:items-center no-overflow px-2 py-4"
      >
        <div
          v-show="sliderPosition === 'end'"
          class="absolute hidden lg:inline-block p-4 top-[62%] left-[-10px] z-[999] transform -translate-x-1/2 -translate-y-1/2"
        >
          <font-awesome-icon
            @click.prevent="moveTo('left')"
            class="text-[#ffd900e1] hover:text-[#FFD700] cursor-pointer hover:scale-110 hover:drop-shadow-lg transition-all duration-300 drop-shadow text-4xl"
            :icon="['fas', 'circle-arrow-left']"
          />
        </div>
        <Card @mousemove.prevent="mousemove" id="card" v-for="(i, index) in products.length" :title="products[index].title" :image="products[index].image" />
        <div
          v-show="sliderPosition === 'start'"
          class="absolute hidden lg:inline-block p-4 top-[62%] right-[-80px] z-[999] transform -translate-x-1/2 -translate-y-1/2"
        >
          <font-awesome-icon
            @click.prevent="moveTo('right')"
            class="text-[#ffd900e1] hover:text-[#FFD700] cursor-pointer hover:scale-110 hover:drop-shadow-lg transition-all duration-300 drop-shadow text-4xl"
            :icon="['fas', 'circle-arrow-right']"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-overflow {
  overflow-x: hidden;
}
</style>
