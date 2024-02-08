<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { store } from "../../store";

const router = useRouter();

const slugify = (str) =>
	str
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|-+$/g, "");

const searchRestaurant = () => {
	store.searchQuery = input.value;
	router.push({
		name: "search",
		params: { slug: store.searchQuery ? slugify(input.value) : "all" },
	});
};

const input = ref(store.searchQuery);
</script>

<template>
	<input
		type="text"
		@submit.prevent="searchRestaurant"
		@keyup.enter="searchRestaurant"
		id="input-group-1"
		v-model="input"
		class="z-10 w-[370px] border-4 border-[#FFA500] text-base rounded-lg hover:border-[#FFD700] focus:outline-none block ps-10 p-2.5"
		placeholder="Inserisci il nome del tuo ristorante preferito" />
</template>
