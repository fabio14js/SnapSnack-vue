<script setup>
import FooterDropDown from "./FooterDropDown.vue";

const restaurantChains = [
  {
    name: "McDonald's",
    link: "https://www.mcdonalds.it/",
  },
  {
    name: "Pizza Hut",
    link: "https://www.pizzahut.co.uk/",
  },
  {
    name: "KFC (Kentucky Fried Chicken)",
    link: "https://www.kfc.it/",
  },
  {
    name: "Burger King",
    link: "https://www.burgerking.it/index.htm",
  },
  {
    name: "Roadhouse Grill",
    link: "https://www.roadhouse.it/",
  },
  {
    name: "Old Wild West",
    link: "https://www.oldwildwest.it/code/22013/home",
  },
  {
    name: "La Piadineria",
    link: "https://www.lapiadineria.com/",
  },

  {
    name: "Tigelleria Romana",
    link: "https://www.tigelleriaromana.it/",
  },
  {
    name: "Fratelli La Bufala",
    link: "https://fratellilabufala.com/",
  },
  {
    name: "Con Mollica O Senza",
    link: "https://www.conmollicaosenzashop.it/",
  },
];

const legalNotices = [
  {
    name: "Termini & Condizioni",
    link: "#",
  },
  {
    name: "Informativa sulla privacy",
    link: "#",
  },
  {
    name: "Cookies",
    link: "#",
  },
  {
    name: "Richieste da parte delle Autorità Pubbliche",
    link: "#",
  },
];

const companyInformation = [
  {
    name: "Domande frequenti",
    link: "#",
  },
  {
    name: "Chi Siamo",
    link: "#",
  },
  {
    name: "Lavora con noi",
    link: "#",
  },
  {
    name: "Contatti",
    link: "#",
  },
  {
    name: "SnapSnack Pro",
    link: "#",
  },
];
</script>

<template>
  <div class="transition-all duration-200 container my-0 mx-auto">
    <div class="w-full flex gap-[200px] items-center xl:flex-row flex-col mb-8">
      <div class="flex flex-col gap-6">
        <img draggable="false" class="w-[500px] drop-shadow-md" src="/snaps-logo.png" alt="logo" />
        <ul class="flex items-center justify-center gap-6 text-[#FFA500] text-3xl">
          <li>
            <a href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
          </li>
          <li>
            <a href=""><font-awesome-icon icon="fa-brands fa-x-twitter" /></a>
          </li>
          <li>
            <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          </li>
          <li>
            <a href=""><font-awesome-icon icon="fa-brands fa-tiktok" /></a>
          </li>
        </ul>
        <span class="text-[#FFA500] text-center text-lg">&copy; 2024 SnapSnack</span>
      </div>
      <div class="xl:grid grid-cols-3 gap-4 hidden">
        <ul class="flex flex-col gap-2 bg-white rounded-md p-8 drop-shadow-xl">
          <li class="mb-2">
            <h2 class="text-[#FFA500] text-2xl font-bold">Catene</h2>
          </li>
          <li v-for="restaurant in restaurantChains">
            <a class="hover:text-[#FFA500] transition-colors duration-200" :href="restaurant.link">{{ restaurant.name }}</a>
          </li>
        </ul>
        <ul class="flex flex-col gap-2 bg-white rounded-md p-8 drop-shadow-xl">
          <li class="mb-2">
            <h2 class="text-[#FFA500] text-2xl font-bold">Note legali</h2>
          </li>
          <li v-for="notice in legalNotices">
            <a class="hover:text-[#FFA500] transition-colors duration-200" href="">{{ notice.name }}</a>
          </li>
        </ul>
        <ul class="flex flex-col gap-2 bg-white rounded-md p-8 drop-shadow-xl">
          <li class="mb-2">
            <h2 class="text-[#FFA500] text-2xl font-bold">Chi Siamo</h2>
          </li>
          <li v-for="information in companyInformation">
            <a class="hover:text-[#FFA500] transition-colors duration-200" href="">{{ information.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col xl:hidden">
      <FooterDropDown :position="1" :title="'Catene'" :list="restaurantChains" />
      <FooterDropDown :position="2" :title="'Note legali'" :list="legalNotices" />
      <FooterDropDown :position="3" :title="'About Us'" :list="companyInformation" />
    </div>
  </div>
</template>

<style scoped></style>
