<template>
    <header :class="['w-full', 'text-sm', headerHeightClass]">
        <div class="fixed top-0 left-0 h-16 w-full bg-white">
            <div
                class="flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
            >
                <router-link to="/" class="flex h-full items-center text-xl">{{
                    company
                }}</router-link>

                <nav class="h-full ml-12">
                    <ul class="flex h-full list-none">
                        <!-- <li class="h-full">
                            <a class="h-full flex items-center py-2.5" href=""
                                >Teams</a
                            >
                        </li> -->
                        <li
                            class="ml-9 h-full first:ml-0"
                            v-for="(item, index) in menuItems"
                            :key="index"
                        >
                            <router-link
                                class="h-full flex items-center py-2.5"
                                :to="item.url"
                                >{{ item.text }}</router-link
                            >
                        </li>
                    </ul>
                </nav>

                <div class="ml-auto flex items-center h-full">
                    <profile-image v-if="userStore.isLoggedIn" />
                    <ActionButton
                        text="Sign In"
                        type="primary"
                        v-else
                        @click="userStore.LOGIN_USER"
                    />
                </div>
            </div>
            <The-SubNav v-if="userStore.isLoggedIn" />
        </div>
    </header>
</template>
<script>
import { mapStores } from "pinia";
import { useUserStore, LOGIN_USER } from "../../stores/user";

import ActionButton from "../shared/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import TheSubNav from "./SubNav.vue";

export default {
    name: "MainNavVue",
    data() {
        return {
            company: "Tawzeef Careers",
            menuItems: [
                {
                    text: "Teams",
                    url: "/teams",
                },
                {
                    text: "Location",
                    url: "/",
                },
                {
                    text: "Life at Tawzeef",
                    url: "/",
                },
                {
                    text: "How we hire",
                    url: "/",
                },
                {
                    text: "Students",
                    url: "/",
                },
                {
                    text: "Jobs",
                    url: "/job/results",
                },
            ],
            isLoggedIn: false,
        };
    },
    methods: {
        /*   login() {
            this.userStore.isLoggedIn = true;
        }, */
    },
    components: {
        ActionButton,
        ProfileImage,
        TheSubNav,
    },
    computed: {
        ...mapStores(useUserStore),
        headerHeightClass() {
            return {
                "h-16": !this.userStore.isLoggedIn,
                "h-32": this.userStore.isLoggedIn,
            };
        },
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    unmounted() {
        console.log("unmounted");
    },
};
</script>
