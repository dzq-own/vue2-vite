<template>
    <div>
        页面22222111
        <el-button type="primary" @click="openModal">弹窗</el-button>
    </div>
</template>

<script>
    import Page1 from './page-1'

    export default {
        name: "page-2",
        mounted() {

        },
        methods: {
            openModal() {
                this.$vxeModal.show(Page1, {

                }, {
                    width: 800,
                    height: 600
                })
            }
        }
    }
</script>

<style scoped>

</style>
