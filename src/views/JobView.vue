<template>
    <div>Job id : {{ currentJobId }}</div>
</template>

<script>
export default {
    name: "JobView",
    computed: {
        currentJobId() {
            return this.$route.params.jobId;
        },
    },
};
</script>

<style></style>
