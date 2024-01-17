<template>
    <form
        class="flex h-12 w-full items-center rounded-3xl border border-solid border-[#80868b]"
        @submit="searchForJobs"
    >
        <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
        <div class="flex h-full flex-1 flex-nowrap text-base font-light">
            <div class="relative flex h-full flex-1 items-center pr-3">
                <label class="absolute left-0 -top-10">Role</label>
                <TextInput
                    placeholder="SoftWare engineer"
                    @handleInput="updateRole"
                    :value="role"
                />
            </div>
            <span
                class="flex h-full items-center border-l border-r border-[#80868b] bg-[#f8f9fa] px-3"
                >in</span
            >
            <div class="relative flex h-full flex-1 items-center pl-3">
                <label class="absolute left-0 -top-10">Where?</label>

                <TextInput
                    placeholder="Cairo "
                    @handleInput="updateLocation"
                    :value="location"
                />
            </div>
        </div>
        <action-button type="secondary" text="Search" class="rounded-r-3xl" />
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ActionButton from "../shared/ActionButton.vue";
import TextInput from "../shared/TextInput.vue";

const role = ref("");
const location = ref("");

const updateRole = (value) => {
    console.log(value);
    role.value = value;
};
const updateLocation = (value) => {
    location.value = value;
};

const router = useRouter();
const searchForJobs = () => {
    router.push({
        name: "JobResults",
        query: { role: role.value, location: location.value },
    });
};
</script>

<style></style>
