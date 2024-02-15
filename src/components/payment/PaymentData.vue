<script setup>
import { onMounted, getCurrentInstance, ref } from "vue";

const instance = getCurrentInstance();
const error = ref(false)

function handleEmit() {
  instance.emit("customPaymentSubmit");
}

onMounted(() => {
  let button = document.querySelector('#submit-button');

   braintree.dropin.create(
    {
      authorization: "sandbox_g42y39zw_348pk9cgf3bgyw2b",
      selector: "#dropin-container",
    },
    function (err, instance) {
      button.addEventListener("click", function (e) {
        instance.requestPaymentMethod(function (err, payload) {
          if (err) {
            e.preventDefault()
            error.value = true
          } else {
            handleEmit();
          }
        });
      });
    }
  );
});
</script>

<template>
  <div
    class="container mx-auto transition-all duration-200 px-12 my-10 relative text-center flex flex-col"
  >
    <div id="dropin-container"></div>

    <button
      id="submit-button"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Invia
    </button>
    <span v-if="error" class="text-red-500">Inserisci dei dati di pagamento validi</span>
  </div>
</template>
