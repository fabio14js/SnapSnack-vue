<script setup>
import Button from '../utility/Button.vue';

</script>

<template>
  <div class="flex justify-between items-center">
    <img class="w-[310px]" draggable="false" src="../../../public/snaps-text-removebg-preview.png" alt="Logo Sito">
    <ul class="flex gap-4 items-center">
      <li class="flex justify-center items-center gap-1">        
        <Button :icon="'fa-solid fa-chevron-down'" :text="'Collabora con noi'" :link="'/'" />
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
