<template>
    <ul>
        <li v-for="spotlight in spotLights" :key="spotlight.id">
            <slot :spotlight="spotlight"></slot>
        </li>
    </ul>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const spotLights = ref([]);

const getSpotlight = async () => {
    const response = await axios.get("http://localhost:3000/spotlights");
    spotLights.value = response.data;
};
onMounted(getSpotlight);
</script>

<style></style>
