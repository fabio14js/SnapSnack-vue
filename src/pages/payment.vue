<script setup>
import { ref, computed, defineEmits } from "vue";
import UserData from "../components/payment/UserData.vue";
import PaymentData from "../components/payment/PaymentData.vue";

const currentPage = ref('userData')

defineEmits (['customUserDataSubmit', 'customPaymentSubmit']);

const userData = ref({})

const controller = ref({
    userData: false,
    payment: false
})

function handleUserDataSubmit(formData) {
    userData.value = formData
    controller.value.userData = true
    console.log(userData.value, controller.value)
    currentPage.value = 'payment'
    console.log(currentPage.value)
}

function handlePaymentSubmit() {
    controller.value.payment = true
    currentPage.value = 'isCompleted'
    console.log(currentPage.value)
}

const isCompleted = computed(() => {
  return controller.value.userData && controller.value.payment;
});


</script>

<template>
    <div class="container mx-auto transition-all duration-200 px-12 my-10 relative">
        <div class="bg-[#f5deb398] drop-shadow-md grid grid-cols-3 w-full font-bold">
            <div :class="currentPage === 'userData' ? 'bg-[wheat]' : ''" class="flex justify-center items-center py-6 px-4">Dati Personali</div>
            <div :class="currentPage === 'payment' ? 'bg-[wheat]' : ''" class="flex justify-center items-center py-6 px-4">Dati Pagamento</div>
            <div :class="isCompleted ? 'bg-[wheat]' : ''" class="flex justify-center items-center py-6 px-4">Stato Ordine</div>
        </div>
    </div>
    <UserData v-if="!controller.userData" @customUserDataSubmit="handleUserDataSubmit" />
    <PaymentData v-else @customPaymentSubmit="handlePaymentSubmit" />
</template>


<style scoped></style>
