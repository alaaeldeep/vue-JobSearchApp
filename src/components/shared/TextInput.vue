<template>
    <input
        type="text"
        :value="value"
        class="w-full text-lg font-normal mr-2 focus:outline-none"
        @input="handelInput"
    />
</template>

<script>
export default {
    name: "TextInput",
    props: {
        value: {
            type: String,
            required: false,
        },
    },

    methods: {
        handelInput($event) {
            this.$emit("handleInput", $event.target.value);
        },
    },
};
</script>

<style></style>
