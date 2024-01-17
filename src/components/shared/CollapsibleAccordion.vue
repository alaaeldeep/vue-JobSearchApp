<template>
    <div class="border-b border-solid border[#f8f9fa] py-5">
        <div
            class="flex flex-wrap items-center justify-between cursor-pointer"
            @click="toggle"
        >
            <h3>{{ header }}</h3>
            <font-awesome-icon :icon="careIcon" />
        </div>
        <div v-if="isOpen" class="mt-5 w-full">
            <slot>add something</slot>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

defineProps({
    header: {
        type: String,
        required: true,
    },
});

const isOpen = ref(false);
const toggle = () => {
    isOpen.value = !isOpen.value;
};
const careIcon = computed(() =>
    isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
);
</script>

<style></style>
