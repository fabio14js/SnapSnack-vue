<script setup>
import { ref, computed } from "vue";
import { store } from "../store";
import axios from "axios";

const { slug } = defineProps(["slug"]);
const restaurants = ref([]);
const categories = ref([]);
const categoriesCount = ref([]);

const input = ref(store.searchQuery);

axios.get(`${store.apiUrl}/restaurants`).then((resp) => {
	restaurants.value = resp.data.restaurants;
});

axios.get(`${store.apiUrl}/categories`).then((resp) => {
	categories.value = resp.data.categories;
	categoriesCount.value = resp.data.restaurantsCountByCategory;
});

function categoryCounter(category) {
	for (let i = 0; i < categoriesCount.value.length; i++) {
		if (categoriesCount.value[i].name === category) {
			return categoriesCount.value[i].times;
		}
	}
}
</script>

<template>
	<div class="container mt-20 my-0 mx-auto transition-all duration-200 px-6 relative">
		<section class="flex gap-5">
			<div class="flex mt-12 flex-col justify-center gap-4 flex-shrink-0 w-[300px]">
				<h3 class="text-2xl font-bold">Categorie</h3>
				<ul class="flex gap-2 flex-col">
					<li
						class="border cursor-pointer border-slate-200 flex justify-between items-center rounded-xl px-4 py-3"
						:key="category.id"
						v-for="category in categories">
						<span>{{ category.name }}</span>
						<span>{{ categoryCounter(category.name) }}</span>
					</li>
				</ul>
			</div>
			<div class="flex-grow">
				<div class="relative mb-6">
					<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 text-gray-400">
						<font-awesome-icon icon="fa-solid fa-utensils" />
					</div>
					<input
						type="text"
						id="input-group-1"
						class="z-10 w-full border-4 border-[#FFA500] text-base rounded-lg hover:border-[#FFD700] focus:outline-none block ps-10 p-2.5"
						placeholder="Cerca il tuo ristorante preferito" />
				</div>
			</div>
		</section>
	</div>
</template>
