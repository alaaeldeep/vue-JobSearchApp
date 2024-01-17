import { defineStore } from "pinia";
import { getJobs } from "../api/getJobs";
import { useUserStore } from "./user";
export const Fetch_Jobs = "Fetch_Jobs";
export const UNIQUE_ORGANIZATION = "UNIQUE_ORGANIZATION";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";
export const FILTERED_JOBS_BY_ORGANIZATION = "FILTERED_JOBS_BY_ORGANIZATION";
export const FILTERED_JOBS_BY_TYPES = "FILTERED_JOBS_BY_TYPES";
export const FILTERED_JOBS = "FILTERED_JOBS";
export const useJobsStore = defineStore("jobs", {
    state: () => ({ jobs: [] }),
    actions: {
        async [Fetch_Jobs]() {
            this.jobs = await getJobs();
        },
    },
    getters: {
        [UNIQUE_ORGANIZATION]: (state) => {
            return [...new Set(state.jobs.map((job: any) => job.organization))];
        },
        [UNIQUE_JOB_TYPES]: (state) => {
            return [...new Set(state.jobs.map((job: any) => job.jobType))];
        },
        [FILTERED_JOBS_BY_ORGANIZATION]: (state) => {
            const userStore = useUserStore();

            if (userStore.selectedOrganization.length === 0) {
                return state.jobs;
            }
            return state.jobs.filter((job: any) =>
                userStore.selectedOrganization.includes(job.organization)
            );
        },
        [FILTERED_JOBS_BY_TYPES]: (state) => {
            const userStore = useUserStore();

            if (userStore.selectedJobTypes.length === 0) {
                return state.jobs;
            }
            return state.jobs.filter((job: any) =>
                userStore.selectedOrganization.includes(job.jobType)
            );
        },
        [FILTERED_JOBS](state) {
            const noSelectedOrganizations =
                useUserStore().selectedOrganization.length === 0;
            const noSelectedJobTypes =
                useUserStore().selectedJobTypes.length === 0;
            noSelectedOrganizations && noSelectedJobTypes;

            if (noSelectedOrganizations && noSelectedJobTypes) {
                return state.jobs;
            }

            return state.jobs
                .filter((job: any) => {
                    if (noSelectedOrganizations) return true;
                    return useUserStore().selectedOrganization.includes(
                        job.organization
                    );
                })
                .filter((job: any) => {
                    if (noSelectedJobTypes) return true;
                    return useUserStore().selectedJobTypes.includes(
                        job.jobType
                    );
                });
        },
    },
});
