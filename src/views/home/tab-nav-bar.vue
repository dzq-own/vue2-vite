<template>
    <div class="tab-nav-wrapper">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="页面-1" name="page-1"/>
            <el-tab-pane label="页面-2" name="page-2"/>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "tab-nav-bar",
        data() {
            return {
                activeName: ''
            }
        },
        mounted() {
            let current = this.$route;
            if (current.name) {
                this.activeName = current.name;
            }
        },
        methods: {
            handleClick({name}) {
                this.$router.push({
                    name
                })
            }
        }
    }
</script>

<style scoped lang="scss">

    .tab-nav-wrapper {
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        background: linear-gradient(#FFFFFF, #edf6fa);

        ::v-deep {
            .el-tabs__nav {
                margin-left: 25px;
            }

            .el-tabs__item {
                font-weight: bold;
            }

        }
    }

</style>
