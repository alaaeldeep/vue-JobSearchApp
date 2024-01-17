<template>
    <collapsible-accordion header="Job Types">
        <div class="mt-5">
            <fieldset>
                <ul class="flex flex-row flex-wrap">
                    <li
                        class="h-8 w-1/2"
                        v-for="jobType in jobTypes"
                        :key="jobType"
                    >
                        <input
                            :id="jobType"
                            type="checkbox"
                            class="mr-3"
                            v-model="selectedJobTypes"
                            :value="jobType"
                            @change="selectJobType"
                        />
                        <label :for="jobType">{{ jobType }}</label>
                    </li>
                </ul>
            </fieldset>
        </div>
    </collapsible-accordion>
</template>

<script setup>
import CollapsibleAccordion from "../../shared/CollapsibleAccordion.vue";

import { useJobsStore } from "../../../stores/jobs";
import { useUserStore } from "../../../stores/user";

import { ref, computed } from "vue";

const userStore = useUserStore();
const jobStore = useJobsStore();
const jobTypes = computed(() => jobStore.UNIQUE_JOB_TYPES);

const selectedJobTypes = ref([]);

const selectJobType = () => {
    userStore.ADD_SELECTED_JOB_TYPES(selectedJobTypes.value);
};
</script>

<style></style>
