<script setup>
import { ref, computed } from "vue";
const {position} = defineProps ({
    title: String,
    list: Array,
    position: Number
})

const isOpen = ref(false)

function changeStatus () {    
    if (isOpen.value) {
        isOpen.value = false
    } else {
        isOpen.value = true
    }
}

const roundClass = computed(()=> {
    
    if (position === 1) {
        return 'rounded-t-md'
    } else if (position === 3) {
        return 'rounded-b-md'
    } else {
        return ''
    }
}) 


</script>

<template>
    <div @click.prevent="changeStatus" :class="roundClass" class="flex flex-col bg-white drop-shadow-xl p-8 border-b-2 cursor-pointer">
        <div class="flex justify-between items-center">
            <button>
                <h2 class="text-[#FFA500] text-2xl font-bold">{{title}}</h2>
            </button>
            <font-awesome-icon class="text-[#FFA500] text-lg " icon="fa-solid fa-chevron-down" />
        </div>
        <ul class="flex flex-col gap-2 mt-6" v-show="isOpen">
            <li v-for="item in list"><a :href="item.link">{{ item.name }}</a></li>
        </ul>        
    </div>
</template>