<template>
    <div class="flex flex-row w-full flex-nowrap">
        <JobFilterSideBar />
        <JobListing />
    </div>
</template>

<script>
import JobFilterSideBar from "../components/jobResults/JobFilterSideBar/JobFilterSideBar.vue";
import JobListing from "../components/jobResults/JobListing/JobListing.vue";
export default {
    name: "JobResultView",
    components: { JobFilterSideBar, JobListing },
};
</script>

<style></style>
