<script setup>
const { dish } = defineProps(["dish", "counter"]);
</script>

<template>
	<section class="flex justify-between w-full mb-8 bg-white hover:scale-[1.02] transition-all duration-300">
		<div
			@click="$emit('addToCart', dish)"
			class="border rounded-md p-6 hover:shadow-lg cursor-pointer transition-all duration-300">
			<p class="sm:text-xl text-lg">{{ dish.name }}</p>
			<span class="text-lg font-bold">{{ dish.price }} &euro;</span>
		</div>
		<span> {{ counter }}</span>
	</section>
</template>

<style scoped></style>
