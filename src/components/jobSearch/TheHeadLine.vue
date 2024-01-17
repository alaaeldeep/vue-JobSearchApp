<template>
    <section class="mb-16">
        <h1 class="mb-14 text-8xl font-bold tracking-tighter">
            <span :class="actionClass">{{ action }}</span
            ><br />
            For every one
        </h1>
        <h2 class="text-3xl font-light">
            Find your next job at Tawzeef Careers
        </h2>
    </section>
</template>

<script>
export default {
    name: "TheHeadLine",
    data() {
        return {
            action: "Build",
            interval: null,
        };
    },
    methods: {
        changeTitle() {
            this.interval = setInterval(() => {
                const actions = ["Build", "Create", "Design", "Code"];
                const currentActionIndex = actions.indexOf(this.action);
                const nextActionIndex = (currentActionIndex + 1) % 4;

                this.action = actions[nextActionIndex];
            }, 3000);
        },
    },
    computed: {
        actionClass() {
            return {
                [this.action.toLowerCase()]: true,
            };
        },
    },
    beforeCreate() {
        console.log("beforeCreate", this.sample);
    },
    created() {
        this.changeTitle();
        console.log("created", this.sample);
    },
    beforeMount() {
        console.log("beforeMount", this.sample);
    },
    mounted() {
        console.log("mounted", this.sample);
    },
    beforeUpdate() {
        console.log("beforeUpdate", this.sample);
    },
    updated() {
        console.log("updated", this.sample);
    },
    beforeUnmount() {
        clearInterval(this.interval);
        console.log("beforeUnmount", this.sample);
    },
    unmounted() {
        console.log("unmounted", this.sample);
    },
};
</script>
<style scoped>
.build {
    color: #1a73e8;
}
.create {
    color: #34a853;
}
.design {
    color: #f9ab00;
}
.code {
    color: #d93025;
}
</style>
