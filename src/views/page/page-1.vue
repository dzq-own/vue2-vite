<template>
    <div>

    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "page-1",
        mounted() {
            this.setUser({
                test: '1234'
            })
        },
        methods: {
            ...mapActions(['setUser'])
        }
    }
</script>

<style scoped>

</style>
