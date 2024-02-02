<script setup>

const restaurantChains = [
  "McDonald's",
  "Pizza Hut",
  "KFC (Kentucky Fried Chicken)",
  "Burger King",
  "Roadhouse Grill",
  "Old Wild West",
  "La Piadineria",
  "Bar della Rabbia",
  "Tigelleria Romana",
  "Fratelli La Bufala",
];

</script>


<template>
    <div class="left-0 bottom-0 w-full bg-black text-white grid grid-cols-4 gap-4 place-items-center">
        <div>
            <img class="w-[500px]" src="\public\snaps-logo.png" alt="">
        </div>
        <div>
            <ul>
                <li>
                    <h2>Catene</h2>
                </li>
                <li v-for="restaurant in restaurantChains">{{ restaurant }}</li>
            </ul>
        </div>
        <div>ciao</div>
        <div>ciao</div>

    </div>
</template>


<style scoped>

</style>