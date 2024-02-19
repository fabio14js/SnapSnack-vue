<script setup>

const { props } = defineProps(['restaurant']);

</script>

<template>
    
        
    <div v-if="restaurant.description" class="bg-white p-2 md:p-4 drop-shadow-md rounded-md flex flex-col gap-4 mb-4">
        <h2 class="lg:text-lg md:text-base font-semibold">Chi siamo</h2>         

        <p class="text-sm md:text-base">  
            {{ restaurant.description }}              
        </p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
        <div class="bg-white p-2 md:p-4 drop-shadow-md rounded-md flex flex-col gap-4">
            <h2 class="lg:text-lg md:text-base font-semibold">Come posso ordinare una consegna di {{ restaurant.name }} a domicilio ?</h2>
            <p class="text-sm md:text-base">Per ordinare la tua consegna da {{ restaurant.name }}, ti basta aprire il sito web e cercare il nostro ristorante. Quindi, inserisci il tuo indirizzo per vedere se {{ restaurant.name }} offre la consegna a domicilio nella tua zona. Potrai scegliere i prodotti che desideri e aggiungerli all’ordine. Dopo aver completato il pagamento, il negozio inizierà a preparare il tuo ordine e in poco tempo un corriere lo consegnerà direttamente alla tua porta.</p>
        </div>
        <div class="bg-white p-2 md:p-4 drop-shadow-md rounded-md flex flex-col gap-4">
            <h2 class="lg:text-lg md:text-base font-semibold">Quanto costa la consegna a domicilio da {{ restaurant.name }} ?</h2>
            <p class="text-sm md:text-base">Per sapere quanto ti costerà la consegna a domicilio da {{ restaurant.name }}, controlla il costo di consegna indicato nella parte superiore della pagina. Lo troverai anche nella ripartizione dei costi prima di inviare l’ordine.</p>
        </div>            
    </div>


</template>

<style scoped>

</style>