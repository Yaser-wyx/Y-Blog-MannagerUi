<template>
    <v-app class="windows">
        <toolbar></toolbar>

        <nuxt/>
    </v-app>
</template>

<script>
    import toolbar from '../components/layout/toolbar/toolbar'

    export default {
        components: {toolbar}
    }
</script>

<style scoped>
    .title {
        padding-left: 20px;
    }

    .windows {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
</style>
