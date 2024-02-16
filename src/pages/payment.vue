<script setup>
import { ref, computed } from "vue";
import UserData from "../components/payment/UserData.vue";
import PaymentData from "../components/payment/PaymentData.vue";
import { useStorage } from "@vueuse/core";
import { useRouter } from "vue-router";
import axios from "axios";
import Complete from "../components/payment/Complete.vue";
import { store } from "../store";

const router = useRouter();

const currentPage = ref("userData");

defineEmits(["customUserDataSubmit", "customPaymentSubmit"]);
const cart = useStorage("cart", []);

const userData = ref({});

const controller = ref({
	userData: false,
	payment: false,
});

function handleUserDataSubmit(formData) {
	userData.value = formData;
	controller.value.userData = true;
	currentPage.value = "payment";
}

async function handlePaymentSubmit() {
	controller.value.payment = true;
	currentPage.value = "isCompleted";

	
	setTimeout(() => {
		router.push({
			name: "home",
		});
	}, 5000);



	// console.log(cart.value);
	// console.log(userData.value);


	const headers = {
		'Content-Type': 'application/json',
	}

	await axios
		.post(`${store.apiUrl}/order`,  {
			chest: cart.value,
			user: userData.value,
		}, {headers: headers})
		.then((resp) => {
			console.log(resp);
		}
		).catch((error)=> {
			console.log(error);
		});

	// SVUOTO IL CARRELLO DOPO AVER MANDATO I DATI AL DB 

	cart.value = []
}

const isCompleted = computed(() => {
	return controller.value.userData && controller.value.payment;
});
</script>

<template>
	<div class="container mx-auto transition-all duration-200 px-12 my-10 relative text-center">
		<div class="bg-[#f5deb398] drop-shadow-md grid grid-cols-3 w-full font-bold">
			<div :class="currentPage === 'userData' ? 'bg-[wheat]' : ''" class="flex justify-center items-center py-6 px-4">
				Dati Personali
			</div>
			<div :class="currentPage === 'payment' ? 'bg-[wheat]' : ''" class="flex justify-center items-center py-6 px-4">
				Dati Pagamento
			</div>
			<div :class="isCompleted ? 'bg-[wheat]' : ''" class="flex justify-center items-center py-6 px-4">
				Stato Ordine
			</div>
		</div>
	</div>
	<UserData v-if="!controller.userData" @customUserDataSubmit="handleUserDataSubmit" />
	<PaymentData v-if="controller.userData && !isCompleted" @customPaymentSubmit="handlePaymentSubmit" />
	<Complete v-if="isCompleted" />
</template>
