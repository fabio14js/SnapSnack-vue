<script setup>
import { ref } from "vue";
import UserData from "../components/payment/UserData.vue";

defineEmits (['customSubmit']);

function handleUserDataSubmit(formData) {
    console.log(formData);
}

</script>

<template>
    <UserData @customSubmit="handleUserDataSubmit" />
</template>


<style scoped></style>
