<template>
    <img :src="imageLinkL" class="h-8 w-8 rounded-3xl object-contain" />
</template>
<script>
export default {
    name: "ProfileImage",
    data() {
        return {
            imageLinkL: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
        };
    },
};
</script>
