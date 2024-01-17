<template>
    <div class="h-16 w-full border-solid border-[rgb(218,220,224)] bg-white">
        <div class="flex h-full items-center px-8">
            <div v-if="onJobResultsPage">
                <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
                <span
                    ><span class="text-[#137333]">{{
                        FILTERED_JOBS.length
                    }}</span>
                    jobs matched</span
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useJobsStore } from "../../stores/jobs";

import { useRoute } from "vue-router";

import { computed } from "vue";
const route = useRoute();
const onJobResultsPage = () => {
    return route.name === "JobResults";
};

const jobStore = useJobsStore();
const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS);
</script>

<style></style>
