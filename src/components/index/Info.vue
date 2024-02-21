<script setup>
import { ref } from "vue";

const cards = ref([
  {
    title: "Diventa Nostro Partner",
    image: "/plates.jpg",
    paragraph: "Unisciti a SnapSnak e raggiungi più clienti che mai. Noi ci occupiamo della consegna, così tu puoi concentrarti sul cibo.",
  },
  {
    title: "Diventa un Rider",
    image: "/rider.jpg",
    paragraph: "La libertà di adattare il lavoro alla tua vita. Inoltre, ottimi compensi, vantaggi e sconti.",
  },
]);
</script>

<template>
  <section class="container my-20 mx-auto transition-all duration-200 px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 gap-y-8 drop-shadow-xl">
      <figure class="rounded-md drop-shadow-xl cursor-pointer hover:scale-[1.01] transition-transform duration-200 relative" v-for="card in cards">
        <img draggable="false" loading="eager" class="drop-shadow-xl rounded-md" :alt="card.title" :src="card.image" />
        <ul class="flex flex-col text-white gap-2 absolute bottom-[30px] left-[30px]">
          <li class="text-xl md:text-2xl font-bold drop-shadow-md">{{ card.title }}</li>
          <li class="max-w-[400px] text-sm md:text-base drop-shadow-md">{{ card.paragraph }}</li>
          <a
            class="bg-white mt-1 hover:scale-105 transition-transform duration-200 text-sm md:text-base flex items-center gap-2 drop-shadow-lg self-start rounded-md text-black py-2 px-3"
            >Scopri di più
            <font-awesome-icon class="text-[#ffa90c]" :icon="['fas', 'arrow-right']" />
          </a>
        </ul>
      </figure>
    </div>
  </section>
</template>
