<script setup>
import { getCurrentInstance, ref, computed } from "vue";

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  phoneNumber: "",
});

const formDataErr = ref({
  firstName: false,
  lastName: false,
  email: false,
  address: false,
  phoneNumber: false,
});

function isOnlyNumber(item) {
  return !isNaN(Number(item));
}

function validateEmail(email) {
  // Utilizzo di un'espressione regolare per la validazione dell'email
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

  // Restituisce true se l'email è valida, altrimenti false
  return emailPattern.test(email);
}

const instance = getCurrentInstance();

function validateEmit() {
  let errors = false;

  if (
    formData.value.firstName === "" ||
    formData.value.firstName.length <= 3 ||
    formData.value.firstName.length > 50 ||
    isOnlyNumber(formData.value.firstName)
  ) {
    formDataErr.value.firstName = true;
    errors = true;
  } else {
    formDataErr.value.firstName = false;
  }

  if (
    formData.value.lastName === "" ||
    formData.value.lastName.length <= 3 ||
    formData.value.lastName.length > 50 ||
    isOnlyNumber(formData.value.lastName)
  ) {
    formDataErr.value.lastName = true;
    errors = true;
  } else {
    formDataErr.value.lastName = false;
  }

  if (
    formData.value.email === "" ||
    formData.value.email.length < 1 ||
    formData.value.email.length > 255 ||
    !validateEmail(formData.value.email)
  ) {
    formDataErr.value.email = true;
    errors = true;
  } else {
    formDataErr.value.email = false;
  }

  if (
    formData.value.address === "" ||
    formData.value.address.length < 5 ||
    formData.value.address.length > 70 ||
    isOnlyNumber(formData.value.address)
  ) {
    formDataErr.value.address = true;
    errors = true;
  } else {
    formDataErr.value.address = false;
  }

  if (
    formData.value.phoneNumber === "" ||
    formData.value.phoneNumber.length !== 10 ||
    !isOnlyNumber(formData.value.phoneNumber)
  ) {
    formDataErr.value.phoneNumber = true;
    errors = true;
  } else {
    formDataErr.value.phoneNumber = false;
  }

  if (errors === false) {
    instance.emit("customUserDataSubmit", formData.value);
  }
}
</script>

<template>
  <div class="container mx-auto transition-all duration-200 px-12 relative">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Inserisci i tuoi dati
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-6">
        <div class="sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Nome</label
          >
          <div class="mt-2">
            <input
              :class="formDataErr.firstName ? 'ring-red-500' : ''"
              v-model="formData.firstName"
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            <span v-if="formDataErr.firstName">Inserisci un nome valido.</span>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="last-name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Cognome</label
          >
          <div class="mt-2">
            <input
              :class="formDataErr.lastName ? 'ring-red-500' : ''"
              v-model="formData.lastName"
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            <span v-if="formDataErr.lastName"
              >Inserisci un cognome valido.</span
            >
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email</label
          >
          <div class="mt-2">
            <input
              :class="formDataErr.email ? 'ring-red-500' : ''"
              v-model="formData.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            <span v-if="formDataErr.email">Inserisci un'email valida.</span>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="street-address"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Indirizzo</label
          >
          <div class="mt-2">
            <input
              :class="formDataErr.address ? 'ring-red-500' : ''"
              v-model="formData.address"
              type="text"
              name="street-address"
              id="street-address"
              autocomplete="street-address"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            <span v-if="formDataErr.address"
              >Inserisci un indirizzo valido</span
            >
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="phone-number"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Numero di telefono</label
          >
          <div class="mt-2">
            <input
              :class="formDataErr.phoneNumber ? 'ring-red-500' : ''"
              v-model="formData.phoneNumber"
              type="text"
              name="phone-number"
              id="phone-number"
              autocomplete="phone-number"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            <span v-if="formDataErr.phoneNumber"
              >Inserisci un numero valido</span
            >
          </div>
        </div>
      </div>
      <button
        @click.prevent="validateEmit"
        type="submit"
        class="rounded-md bg-[#f8dead] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#FE6249]"
      >
        Invia
      </button>
    </div>
  </div>
</template>

<style scoped></style>
