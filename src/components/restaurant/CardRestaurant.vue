<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { store } from "../../store.js";
import { useStorage } from "@vueuse/core";
import { useRouter } from "vue-router";

const restaurant = ref([]);
const dishes = ref([]);
const input = ref("");
const cart = useStorage("cart", []);
const isModalOpen = ref(false);
const router = useRouter();

const { slug } = defineProps(["slug"]);

axios.get(`${store.apiUrl}/restaurant/${slug}`).then((res) => {
	restaurant.value = res.data.restaurant;
	dishes.value = res.data.dishes;
});

const filteredDishes = computed(() => {
	if (input.value) {
		const tempArray = [];
		dishes.value.forEach((dish) => {
			if (dish.name.toLowerCase().includes(input.value.toLowerCase())) {
				tempArray.push(dish);
			}
		});

		return tempArray;
	}

	return dishes.value;
});

const isShowingMenu = ref(true);
const isShowingCart = ref(true);

const toggleCartMenu = () => {
	isShowingCart.value = !isShowingCart.value;
};

const changeShowingStatus = (type) => {
	if (type === "info") {
		isShowingMenu.value = false;
	} else if (type === "menu") {
		isShowingMenu.value = true;
	}
};

const total = computed(() => {
	let temp = 0;
	cart.value.forEach((item) => {
		temp += Number(item.price * item.counter);
	});
	return temp.toFixed(2);
});

const getDishCounter = (dish) => {
	const cartDish = cart.value.find((cartDish) => cartDish.id === dish.id);
	return cartDish ? cartDish.counter : 0;
};

const addToCartHandler = (dish) => {
	let valid = true;
	cart.value.forEach((item) => {
		if (item.restaurant_id !== restaurant.value.id) {
			scrollTop();
			isModalOpen.value = true;
			document.documentElement.style.overflow = "hidden";
			valid = false;
		}
	});
	if (valid) {
		const existingDish = cart.value.find((cartDish) => cartDish.id === dish.id);

		if (existingDish) {
			if (existingDish.counter < 100) {
				existingDish.counter++;
			}
		} else {
			cart.value.push({ ...dish, counter: 1 });
		}
	}
};

const removeFromCartHandler = (dish) => {
	const existingDish = cart.value.find((cartDish) => cartDish.id === dish.id);
	if (existingDish.counter > 1) {
		existingDish.counter--;
	} else {
		removeDish(dish);
	}
};

const removeDish = (dish) => {
	const currentIndexDish = cart.value.findIndex((cartDish) => cartDish.id === dish.id);
	if (currentIndexDish >= 0) {
		cart.value.splice(currentIndexDish, 1);
	}
};

function scrollTop() {
	window.scrollTo(0, 0);
}

const modalHandleClick = (resp) => {
	if (resp === "yes") {
		cart.value = [];
		isModalOpen.value = false;
		document.documentElement.style.overflow = "scroll";
	} else if (resp === "no") {
		cart.value.forEach((item) => {
			if (item.restaurant_id !== restaurant.value.id) {
				axios.get(`${store.apiUrl}/restaurant/get/${item.restaurant_id}`).then(async (resp) => {
					await router.push({
						name: "restaurant",
						params: { slug: resp.data.restaurant.slug },
					});
					router.go();
				});
			}
		});
	}
};

onMounted(() => {
	scrollTop();
});
</script>

<template>
	<div
		v-if="isModalOpen"
		class="absolute h-full w-full left-0 top-0 bg-[#0000008e] z-[999]">
		<div class="absolute drop-shadow-2xl rounded-xl left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-6 bg-white">
			<span>Continuando su questo ristorante il tuo carrello corrente verrà eliminato, sei sicuro di voler procedere?</span>
			<div class="flex justify-center gap-4 items-center mt-6 text-white">
				<button
					@click.prevent="modalHandleClick('no')"
					class="px-4 py-1 bg-green-500 rounded-md drop-shadow hover:bg-green-600 transition-colors duration-200">
					No
				</button>
				<button
					@click.prevent="modalHandleClick('yes')"
					class="px-4 py-1 bg-red-500 rounded-md drop-shadow hover:bg-red-600 transition-colors duration-200">
					Si
				</button>
			</div>
		</div>
	</div>
	<section class="bg-image">
		<div class="container mx-auto transition-all duration-200 px-12 relative">
			<div class="flex flex-col justify-center items-center py-4">
				<div
					:style="{ backgroundImage: `url(${restaurant.photo})` }"
					class="bg-no-repeat bg-cover transition-all duration-200 2xl-[1200px] lg:w-[1000px] md:w-[800px] sm:w-[600px] w-[400px] rounded shadow-lg flex justify-center items-center flex-col border p-6 mb-10">
					<div class="px-6 py-4 text-center bg-[#F5DEB3]/[.73] rounded-md shadow-lg">
						<h1 class="font-bold text-6xl mb-2">{{ restaurant.name }}</h1>
						<p class="text-black text-xl">
							{{ restaurant.address }}
						</p>
					</div>
					<div class="bg-zinc-300/[.73] rounded-md p-2 m-2 text-sm flex gap-4 shadow-lg">
						<p>Costo Spedizione <span class="font-bold">3,99 $</span></p>
						<p>Ordina minimo <span class="font-bold">5,99 $</span></p>
					</div>
					<div class="px-6 pt-4 pb-2">
						<span
							v-for="category in restaurant.categories"
							class="inline-block bg-[#fe6346] rounded-full px-6 py-1 text-sm font-semibold text-white mr-2 mb-2 shadow-lg">
							{{ category.name }}
						</span>
					</div>
				</div>
				<!-- Cart -->
				<div
					class="absolute top-4 right-0 bg-white rounded-md p-3 shadow-lg border-2 cursor-pointer"
					@click="toggleCartMenu"
					v-show="isShowingCart">
					<font-awesome-icon
						class="text-3xl"
						icon="fa-solid fa-cart-shopping" />
				</div>
				<div
					class="fixed top-0 right-0 bg-black opacity-75 text-white rounded-md lg:shadow-md px-[70px] py-[20px] h-full z-10 flex flex-col justify-between"
					v-show="!isShowingCart">
					<div>
						<h2 class="font-semibold text-2xl mb-4">Il tuo Carrello</h2>
						<div
							v-for="dish in cart"
							:key="dish.id"
							class="flex justify-between gap-6">
							<p>{{ dish.name }}</p>
							<p>{{ dish.price }}</p>
							<div class="flex gap-2">
								<span
									@click="removeFromCartHandler(dish)"
									class="text-gray-400 cursor-pointer"
									><font-awesome-icon icon="fa-regular fa-square-minus"
								/></span>
								<span>{{ dish.counter }}</span>
								<span
									@click="addToCartHandler(dish)"
									class="text-gray-400 cursor-pointer"
									><font-awesome-icon icon="fa-regular fa-square-plus"
								/></span>
								<span
									@click="removeDish(dish)"
									class="cursor-pointer text-red-500"
									><font-awesome-icon icon="fa-solid fa-trash-can"
								/></span>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-4">
						<h3 class="font-semibold text-lg">Totale</h3>
						<span>{{ total }}</span>
						<button
							class="border rounded-md"
							@click="toggleCartMenu">
							Chiudi
						</button>
					</div>
				</div>
				<!-- Cart -->

				<div class="border w-[80%] p-4 rounded-2xl flex justify-around gap-10 text-xl mb-10 shadow-md bg-white">
					<button
						@click.prevent="changeShowingStatus('menu')"
						class="line-orange menu cursor-pointer p-4 relative hover:font-semibold">
						Menu
					</button>
					<button
						@click.prevent="changeShowingStatus('info')"
						class="line-orange info cursor-pointer p-4 relative hover:font-semibold">
						Info
					</button>
				</div>

				<div
					v-show="isShowingMenu"
					class="relative flex justify-center mb-10">
					<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 text-gray-400">
						<font-awesome-icon icon="fa-solid fa-utensils" />
					</div>
					<input
						type="text"
						id="input-group-1"
						v-model="input"
						class="border-4 border-[#FFA500] rounded-lg w-full hover:border-[#FFD700] focus:outline-none block ps-10 p-2.5 font-medium lg:w-96"
						placeholder="Cerca un piatto" />
				</div>
				<div
					v-show="isShowingMenu"
					v-for="dish in filteredDishes"
					:key="dish.id"
					class="w-full mb-8 bg-white hover:scale-[1.02] transition-all duration-300">
					<div class="flex justify-between items-center border rounded-md p-6 hover:shadow-lg cursor-pointer transition-all duration-300">
						<div>
							<p class="sm:text-xl text-lg">{{ dish.name }}</p>
							<span class="text-lg font-bold">{{ dish.price }} &euro;</span>
						</div>
						<div class="flex gap-2">
							<span
								@click="removeFromCartHandler(dish)"
								class="text-gray-400 cursor-pointer"
								><font-awesome-icon icon="fa-regular fa-square-minus"
							/></span>
							<span class="flex text-lg font-semibold">{{ getDishCounter(dish) }}</span>
							<span
								@click="addToCartHandler(dish)"
								class="text-gray-400 cursor-pointer"
								><font-awesome-icon icon="fa-regular fa-square-plus"
							/></span>
							<span
								@click="removeDish(dish)"
								class="cursor-pointer text-red-500"
								><font-awesome-icon icon="fa-solid fa-trash-can"
							/></span>
						</div>
					</div>
				</div>

				<div v-show="!isShowingMenu">sezione info</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
:hover.line-orange::after {
	content: "";
	display: block;
	width: 50%;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 3px;
	background-color: #ff6246;
	position: absolute;
}

.bg-image {
	position: relative;
}

.bg-image::before {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-image: url(/foods-pattern-bw.jpg);
	background-size: 250px;
	opacity: 0.1;
	z-index: -1;
}
</style>
