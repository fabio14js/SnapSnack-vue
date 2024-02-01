<script setup>


</script>

<template>
  <div class="head-hero bg-black py-10 relative">    
    <img class="hero-img hero-img-1 max-w-full" src="/coffee.png" alt="">
    <img class="hero-img hero-img-2 max-w-full" src="/donut.png" alt="">
    <img class="hero-img hero-img-3 max-w-full" src="/gamberi-tempura.png" alt="">
    <img class="hero-img hero-img-4 max-w-full" src="/icecream.png" alt="">
    <img class="hero-img hero-img-5 max-w-full" src="/meat.png" alt="">
    <img class="hero-img hero-img-6 max-w-full" src="/nigiri.png" alt="">



    
    <section class="container mx-auto transition-all duration-200 px-6">
      <div class="flex items-center justify-center flex-col gap-10">
        <p class="text-[#FFD700] text-7xl text-center font-bold max-w-[800px] z-10">Ordina dal tuo divano e noi pensiamo al resto</p>   
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 text-gray-400">
            <font-awesome-icon icon="fa-solid fa-utensils" />          
          </div>
          <input type="text" id="input-group-1"
            class="z-10 w-[370px] border-4 border-[#FFA500] text-base rounded-lg hover:border-[#FFD700] focus:outline-none block ps-10 p-2.5"
            placeholder="Inserisci il nome del tuo ristorante preferito">
        </div>
        
        
      </div>
  
    </section>

  </div>
</template>

<style scoped>


.images-container {
  width: 100%;
}

.hero-img {
  display: block;
  position: absolute;  
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

