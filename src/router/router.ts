import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobResultView from "../views/JobResultView.vue";
import JobView from "../views/JobView.vue";
import TeamsView from "../views/TeamsView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/job/results",
        name: "JobResults",
        component: JobResultView,
    },
    {
        path: "/job/results/:jobId",
        name: "Job",
        component: JobView,
    },
    {
        path: "/teams",
        name: "Teams",
        component: TeamsView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0, left: 0, behavior: "smooth" };
    },
});

export default router;
