<template>
    <main class="flex-auto p-8">
        <ol>
            <TheJob v-for="job in displayedJobs" :key="job.is" :job="job" />
        </ol>
        <div class="mx-auto mt-8">
            <div class="flex flex-row flex-nowrap">
                <p class="flex-grow text-sm">Page {{ currentPage }}</p>
                <div class="flex item-center justify-center">
                    <routerLink
                        v-if="previousPage"
                        :to="{
                            name: 'JobResults',
                            query: { page: previousPage },
                        }"
                        class="mx-3 text-sm font-semibold text-[#1967d2]"
                        >Previous</routerLink
                    >
                    <routerLink
                        v-if="nextPage"
                        :to="{
                            name: 'JobResults',
                            query: { page: nextPage },
                        }"
                        class="mx-3 text-sm font-semibold text-[#1967d2]"
                        >Next</routerLink
                    >
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import TheJob from "./TheJob.vue";
import { mapState, mapActions, mapStores } from "pinia";
import router from "../../../router/router";
import { useJobsStore, FILTERED_JOBS, Fetch_Jobs } from "../../../stores/jobs";

export default {
    name: "JobListing",
    components: { TheJob },
    data() {},
    async mounted() {
        this.Fetch_Jobs();
    },
    methods: {
        ...mapActions(useJobsStore, [Fetch_Jobs]),
    },
    computed: {
        ...mapState(useJobsStore, {
            FILTERED_JOBS,
            nextPage() {
                const nextPage = this.currentPage + 1;
                const lastPage = this.FILTERED_JOBS.length / 10;
                return nextPage <= lastPage ? nextPage : undefined;
            },
            displayedJobs() {
                const pageNum = this.currentPage;
                const firstPageIndx = (pageNum - 1) * 10;
                const lastPageIndx = pageNum * 10;
                return this.FILTERED_JOBS.slice(firstPageIndx, lastPageIndx);
            },
        }),
        currentPage() {
            return +(this.$route.query.page || "1");
        },
        previousPage() {
            const prevPage = this.currentPage - 1;
            const firstPage = 1;
            return prevPage >= firstPage ? prevPage : undefined;
        },
    },
};
</script>

<style></style>
