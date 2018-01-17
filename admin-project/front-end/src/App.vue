<template>
    <div id="app">
        <div class="logo"></div>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="less">
@import './value.less';
.logo {
    width: 200px;
    height: 200px;
    background: @logo_image;
}
</style>


