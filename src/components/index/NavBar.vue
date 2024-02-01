<script setup>
import Button from "../utility/button.vue";
</script>

<template>
  <div class="flex justify-between items-center">
    <img class="w-[310px]" draggable="false" src="/snapsnack.png" alt="Logo Sito" />
    <ul class="flex gap-4 items-center">
      <li class="flex justify-center items-center gap-1">
        <Button :icon="'fa-solid fa-chevron-down'" :text="'Chi Siamo'" :link="'/'" />
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </li>
      <li class="flex justify-center items-center gap-1">
        <Button :icon="'fa-regular fa-address-card'" :text="'Accedi/Registrati'" :link="'/'" />
      </li>
      <li class="flex justify-center items-center gap-1">
        <Button :icon="'fa-regular fa-user'" :text="'Il Mio Account'" :link="'/'" />
      </li>
    </ul>
  </div>
</template>
