<script setup>

import { onMounted, getCurrentInstance, ref } from 'vue';



function handleEmit() {
    const instance = getCurrentInstance();
    instance.emit('customPaymentSubmit');
}


onMounted (() => {

    var button = document.querySelector('#submit-button');
    
    braintree.dropin.create({
      authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
      selector: '#dropin-container'
    }, function (err, instance) {
      button.addEventListener('click', function () {
        instance.requestPaymentMethod(function (err, payload) {            
          handleEmit()
          
        });
      })
    });

})


</script>

<template>

    <div class="container mx-auto transition-all duration-200 px-12 my-10 relative">
        <div id="dropin-container"></div>
        <button id="submit-button" class="">Purchase</button>

    </div>


</template>

