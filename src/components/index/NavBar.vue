<script setup>
import Button from "./Button.vue";
</script>

<template>
	<div class="flex justify-between items-center">
		<router-link to="/">
			<img
				class="w-[250px] md:w-[310px] drop-shadow-xl"
				draggable="false"
				src="/snapsnack.png"
				alt="Logo Sito" />
		</router-link>

		<ul class="flex gap-4 items-center">
			<li class="justify-center items-center gap-1 hidden lg:flex">
				<Button
					:icon="'fa-solid fa-chevron-down'"
					:text="'Chi Siamo'"
					:link="'/'" />
			</li>
			<li class="justify-center items-center gap-1 hidden sm:flex">
				<Button
					:icon="'fa-regular fa-address-card'"
					:text="'Accedi/Registrati'"
					:link="'/'" />
			</li>
			<li>
				<font-awesome-icon
					:icon="'fa-regular fa-address-card'"
					class="text-[#FFA500] cursor-pointer text-3xl inline-block sm:hidden" />
			</li>
			<!-- <li class="flex justify-center items-center gap-1">
        <Button :icon="'fa-regular fa-user'" :text="'Il Mio Account'" :link="'/'" />
      </li> -->
		</ul>
	</div>
</template>
