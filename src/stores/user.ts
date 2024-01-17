import { defineStore } from "pinia";
interface UserState {
    isLoggedIn: boolean;
    selectedOrganization: any;
}
export const LOGIN_USER = "LOGIN_USER";
export const ADD_SELECTED_ORGANIZATION = "ADD_SELECTED_ORGANIZATION";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const useUserStore = defineStore("user", {
    state: () => ({
        isLoggedIn: false,
        selectedOrganization: [] as any,
        selectedJobTypes: [] as any,
    }),
    actions: {
        [LOGIN_USER]() {
            this.isLoggedIn = true;
        },
        [ADD_SELECTED_ORGANIZATION](organization: any) {
            this.selectedOrganization = organization;
        },
        [ADD_SELECTED_JOB_TYPES](jobTypes: any) {
            this.selectedJobTypes = jobTypes;
        },
    },
});
