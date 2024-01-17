<template>
    <collapsible-accordion header="Organization">
        <div class="mt-5">
            <fieldset>
                <ul class="flex flex-row flex-wrap">
                    <li
                        class="h-8 w-1/2"
                        v-for="organization in organizations"
                        :key="organization"
                    >
                        <input
                            :id="organization"
                            type="checkbox"
                            class="mr-3"
                            v-model="selectedOrganizations"
                            :value="organization"
                            @change="selectOrganizations"
                        />
                        <label :for="organization">{{ organization }}</label>
                    </li>
                </ul>
            </fieldset>
        </div>
    </collapsible-accordion>
</template>

<script setup>
import CollapsibleAccordion from "../../shared/CollapsibleAccordion.vue";

import { ref, computed } from "vue";
import { useJobsStore } from "../../../stores/jobs";
import { useUserStore } from "../../../stores/user";

const userStore = useUserStore();
const jobStore = useJobsStore();

const selectedOrganizations = ref([]);

const organizations = computed(() => jobStore.UNIQUE_ORGANIZATION);

const selectOrganizations = () => {
    userStore.ADD_SELECTED_ORGANIZATION(selectedOrganizations.value);
};
</script>

<style></style>
