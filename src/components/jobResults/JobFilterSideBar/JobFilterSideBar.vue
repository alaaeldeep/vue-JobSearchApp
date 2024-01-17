<template>
    <div
        class="flex w-96 flex-col border-r border-solid p-4 bg-white border-[#dadce0]"
    >
        <section class="pb-5">
            <div class="flex flex-row justify-between">
                <h3 class="my-4 text-base font-semibold">
                    What do you want to do?
                </h3>
                <div class="flex items-center text-sm">
                    <action-button text="ClearFilters" type="secondary" />
                </div>
            </div>
            <job-filter-side-bar-organization />

            <job-filter-side-bar-job-types />
        </section>
    </div>
</template>

<script>
import ActionButton from "../../shared/ActionButton.vue";
import CollapsibleAccordion from "../../shared/CollapsibleAccordion.vue";
import JobFilterSideBarOrganization from "./JobFilterSideBarOrganization.vue";
import JobFilterSideBarJobTypes from "./JobFilterSideBarJobTypes.vue";
export default {
    name: "JobFilterSideBar",
    components: {
        ActionButton,
        CollapsibleAccordion,
        JobFilterSideBarOrganization,
        JobFilterSideBarJobTypes,
    },
};
</script>

<style></style>
