<template>
    <div id="app">
        <transition name="fade-transform" mode="out-in">
            <router-view/>
        </transition>

        <vxe-modal-container/>
    </div>
</template>

<script>

    import {initPx2Rem} from "./utils/px2rem-util.js";

    export default {
        name: 'App',
        created() {
            initPx2Rem();
            window.onresize = () => {
                initPx2Rem();
            }

        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
