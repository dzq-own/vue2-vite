<!--
 * @Author: wangni
 * @LastEditTime: 2021-03-08 11:23:54
-->
<template>
    <div class="index-page">
        <div class="header">
            <div class="logo">

            </div>
            <div class="title">

            </div>
            基本模板工程 Vue 2.6
        </div>
        <div class="tab-nav">
            <tab-nav-bar/>
        </div>
        <div class="body">
            <transition name="fade-transform" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>


    import TabNavBar from "./tab-nav-bar.vue";
    export default {
        name: "index-page",
        components: {
            TabNavBar

        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped lang="scss">

    .index-page {
        width: 100%;
        height: 100%;

        .header {
            width: 100%;
            height: 60px;
            line-height: 60px;
            background: linear-gradient(140deg, #03af9e, #4ec897);
            padding: 0 15px;
            font-weight: bold;
            font-size: 26px;
            color: whitesmoke;
            display: flex;
            flex-direction: row;

            .logo {
                width: 60px;
                height: 60px;
                background: url('../../assets/img/logo/state-grid-logo.png') center no-repeat;
                background-size: 40px 40px;
                margin-right: 20px;
            }
        }

        .tab-nav {
            width: 100%;
            height: 40px;
        }

        .body {
            width: 100%;
            height: calc(100% - 100px);
        }
    }

</style>
