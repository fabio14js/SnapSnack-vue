<script setup>

const restaurantChains = [
    {
    name: "McDonald's",
    link: "https://www.mcdonalds.it/"
    },
    {
    name: "Pizza Hut",
    link: "https://www.pizzahut.co.uk/"
    },   
    {
    name: "KFC (Kentucky Fried Chicken)",
    link: "https://www.kfc.it/"
    },
    {
    name: "Burger King",
    link: "https://www.burgerking.it/index.htm"
    },
    {
    name: "Roadhouse Grill",
    link: "https://www.roadhouse.it/"
    },
    {
    name: "Old Wild West",
    link: "https://www.oldwildwest.it/code/22013/home"
    },
    {
    name: "La Piadineria",
    link: "https://www.lapiadineria.com/"
    },

    {
    name: "Tigelleria Romana",
    link: "https://www.tigelleriaromana.it/"
    },
    {
    name: "Fratelli La Bufala",
    link: "https://fratellilabufala.com/"
    },
    {
        name: "Con Mollica O Senza",
        link: "https://www.conmollicaosenzashop.it/"
    }

];

const legalNotices = [
"Termini & Condizioni",
"Informativa sulla privacy",
"Cookies",
"Richieste da parte delle Autorità Pubbliche"
]

const companyInformation = [
"Domande frequenti",
"Chi Siamo",
"Lavora con noi",
"Contatti",
"SnapSnack Pro"
]


</script>


<template>
    <div class="transition-all duration-200 container my-0 mx-auto">
        <div class="w-full flex gap-[200px] items-center">
           <div class="flex flex-col gap-6">
                <img class="w-[500px] drop-shadow-md" src="\public\snaps-logo.png" alt="logo"> 
                <ul class="flex items-center justify-center gap-6 text-[#FFA500] text-3xl">              
                    <li><a href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a></li>
                    <li><a href=""><font-awesome-icon icon="fa-brands fa-x-twitter" /></a></li>
                    <li><a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
                    <li><a href=""><font-awesome-icon icon="fa-brands fa-tiktok" /></a></li>                
                </ul>
                <span class="text-[#FFA500] text-center text-lg">© 2024 SnapSnack</span>
                
    
            </div>
            <div class="grid grid-cols-3 gap-4">
                <ul class="flex flex-col gap-2 bg-white rounded-md p-8 drop-shadow-xl">
                    <li class="mb-2">
                        <h2 class="text-[#FFA500] text-2xl font-bold">Catene</h2>
                    </li>
                    <li v-for="restaurant in restaurantChains"><a :href="restaurant.link">{{ restaurant.name }}</a></li>
                </ul>
                <ul class="flex flex-col gap-2 bg-white rounded-md p-8 drop-shadow-xl">
                    <li class="mb-2">
                        <h2 class="text-[#FFA500] text-2xl font-bold">Note legali</h2>
                    </li>
                    <li v-for="notice in legalNotices"><a href="">{{ notice }}</a></li>
                </ul>
                <ul class="flex flex-col gap-2 bg-white rounded-md p-8 drop-shadow-xl">
                    <li class="mb-2">
                        <h2 class="text-[#FFA500] text-2xl font-bold">About Us</h2>
                    </li>
                    <li v-for="information in companyInformation"><a href="">{{ information }}</a></li>
                </ul>            
            </div>                
          
        </div>

    </div>
</template>


<style scoped>

</style>