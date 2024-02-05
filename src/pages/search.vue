<script setup>
import { ref, computed } from "vue";
import { store } from "../store";
import axios from "axios";
import Button from "../components/index/Button.vue";

const { slug } = defineProps(["slug"]);
const restaurants = ref([]);
const categories = ref([]);
const categoriesCount = ref([]);

const filter = ref("");

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

const rawRestaurants = computed(() => {
	const tempArr = [];

	restaurants.value.forEach((restaurant) => {
		if (restaurant.name.toLowerCase().includes(input.value.toLowerCase())) {
			tempArr.push(restaurant);
		}
	});

	return tempArr;
});

const filteredRestaurants = computed(() => {
	if (filter.value) {
		let tempArr = [];
		rawRestaurants.value.forEach((restaurant) => {
			for (let i = 0; i < restaurant.categories.length; i++) {
				if (restaurant.categories[i].name === filter.value) {
					tempArr.push(restaurant);
				}
			}
		});
		return tempArr;
	} else {
		return rawRestaurants.value;
	}
});

const handleClick = (category) => {
	filter.value = category;
};

const resetHandler = () => {
	filter.value = "";
	input.value = "";
};
</script>

<template>
	<div class="container my-20 mx-auto transition-all duration-200 px-6 relative">
		<section class="flex gap-8 items-start">
			<div class="hidden md:flex mt-20 flex-col justify-center gap-5 flex-shrink-0 w-[220px] lg:w-[300px] transition-all duration-200">
				<div class="flex justify-between items-center">
					<h3 class="text-2xl font-bold">Categorie</h3>
					<span
						@click.prevent="resetHandler"
						class="cursor-pointer text-sm hover:text-[#fd6146] transition-colors duration-200"
						>Resetta filtri</span
					>
				</div>

				<ul class="flex gap-2 flex-col">
					<li
						class="border transition-colors duration-200 cursor-pointer border-slate-200 flex justify-between items-center rounded-xl px-4 py-3"
						:key="category.id"
						:class="filter === category.name ? 'text-[#FFA500]' : ''"
						@click.prevent="handleClick(category.name)"
						v-for="category in categories">
						<span>{{ category.name }}</span>
						<span>{{ categoryCounter(category.name) }}</span>
					</li>
				</ul>
			</div>
			<div class="flex-grow">
				<div class="flex items-center gap-3 mb-6">
					<div class="relative flex-grow">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 text-gray-400">
							<font-awesome-icon icon="fa-solid fa-utensils" />
						</div>
						<input
							type="text"
							id="input-group-1"
							v-model="input"
							class="z-10 w-full border-4 border-[#FFA500] text-base rounded-lg hover:border-[#FFD700] focus:outline-none block ps-10 p-2.5"
							placeholder="Cerca il tuo ristorante preferito" />
					</div>

					<Button
						:text="'Cerca'"
						:link="'/'"
						:icon="'fa-solid fa-magnifying-glass'" />
				</div>
				<div class="flex flex-col gap-6">
					<h4 class="text-xl">{{ restaurants.length }} ristoranti aperti</h4>
					<Transition>
						<span v-if="filteredRestaurants.length === 0">La ricerca non ha prodotto risultati</span>
					</Transition>

					<TransitionGroup>
						<div
							v-show="filteredRestaurants.length > 0"
							:key="restaurant.id"
							v-for="restaurant in filteredRestaurants"
							class="grid grid-cols-2 lg:grid-cols-3 gap-6">
							<img
								draggable="false"
								class="rounded-2xl drop-shadow cursor-pointer w-full h-[189px] object-center object-cover"
								:src="restaurant.photo" />
							<div class="flex flex-col gap-4">
								<h2 class="font-bold text-xl cursor-pointer drop-shadow-md">{{ restaurant.name }}</h2>
								<ul class="flex gap-2 flex-wrap max-w-[200px] lg:flex-nowrap">
									<li
										class="flex items-center gap-2"
										v-for="(category, i) in restaurant.categories">
										<span>
											{{ category.name }}
										</span>
										<font-awesome-icon
											class="text-[#fd6146] text-[5px]"
											v-if="i !== restaurant.categories.length - 1"
											:icon="['fas', 'circle']" />
									</li>
								</ul>
								<div class="flex flex-col gap-1 xl:hidden text-sm">
									<div class="flex gap-3 items-center">
										<font-awesome-icon
											class="text-[12px] text-[#fd6146]"
											:icon="['fas', 'location-dot']" />
										<span class="sm:whitespace-nowrap whitespace-normal">{{ restaurant.address }}</span>
									</div>
									<div class="flex gap-3 items-center">
										<font-awesome-icon
											class="text-[12px] text-[#fd6146]"
											icon="fa-solid fa-phone" />
										<span class="sm:whitespace-nowrap whitespace-normal">{{ restaurant.phone_number }}</span>
									</div>
								</div>
							</div>
							<div class="hidden flex-col gap-1 text-sm mt-[43px] xl:flex">
								<div class="flex gap-3 items-center">
									<font-awesome-icon
										class="text-[12px] text-[#fd6146]"
										:icon="['fas', 'location-dot']" />
									<span class="font-semibold">{{ restaurant.address }}</span>
								</div>
								<div class="flex gap-3 items-center">
									<font-awesome-icon
										class="text-[12px] text-[#fd6146]"
										icon="fa-solid fa-phone" />
									<span>{{ restaurant.phone_number }}</span>
								</div>
							</div>
						</div>
					</TransitionGroup>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.265s ease;
}

.v-enter-from,
.v-leave-to {
	filter: blur(1.2px);
	opacity: 0;
}
</style>
