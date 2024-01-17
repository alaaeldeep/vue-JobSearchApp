<template>
    <main>
        <section class="flex flex-col pt-10 pb-20">
            <div class="grid grid-cols-12">
                <div class="col-span-1 col-start-1"></div>
                <div class="col-span-5 col-start-2">
                    <TheHeadLine />
                    <JobSearchForm />
                </div>

                <div
                    class="col-span-5 col-start-7 self-center justify-self-center"
                >
                    <img
                        class="h-80 w-80 object-contain"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
                    />
                </div>
                <div class="col-span-1 col-start-12"></div>
            </div>
        </section>
        <spot-light class="flex flex-row justify-center pb-16">
            <template #default="slotProps">
                <router-link
                    to="/jobs/results"
                    class="mx-5 flex h-96 w-72 flex-col rounded-lg border bg-[#f8f9fa]"
                >
                    <img :src="slotProps.spotlight.img" />
                    <div class="mt-3 h-48 px-6 py-4">
                        <h3 class="text-lg font-medium">
                            {{ slotProps.spotlight.title }}
                        </h3>
                        <p class="mt-3 text-sm">
                            {{ slotProps.spotlight.description }}
                        </p>
                    </div>
                    <router-link
                        class="px-6 pb-4 text-sm text-[#1967d2]"
                        to="/jobs/results"
                    >
                        See jobs</router-link
                    >
                </router-link>
            </template>
        </spot-light>
    </main>
</template>

<script>
import SpotLight from "../SpotLight/SpotLight.vue";
import JobSearchForm from "./JobSearchForm.vue";
import TheHeadLine from "./TheHeadLine.vue";

export default {
    name: "TheHero",
    components: {
        TheHeadLine,
        JobSearchForm,
        SpotLight,
    },
};
</script>

<style></style>
