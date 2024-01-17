<script setup>
import { computed } from "vue";

const props = defineProps({
    text: { type: String, required: true },
    type: {
        type: String,
        required: false,
        default: "primary",
        validator(value) {
            return ["primary", "secondary"].indexOf(value) !== -1;
        },
    },
});

const btnClass = computed(() => {
    return {
        [props.type]: true,
    };
});
</script>
<template>
    <button :class="btnClass">{{ text }}</button>
</template>
<style scoped>
button {
    @apply px-5 py-3   font-medium;
}
.primary {
    @apply rounded border-0 bg-[#1967d2] text-white hover:bg-[#1a73e8];
}

.secondary {
    @apply bg-transparent text-[#1967d2]  hover:bg-[#4285f4] hover:text-white;
}
</style>
