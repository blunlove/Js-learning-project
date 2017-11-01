<template>
    <div id="app">
        <header-tab></header-tab>
        <header-add-tab></header-add-tab>
        <div class="nav-box">
            <p class="nav-list">
                <router-link class="nav-item" to="/">首页</router-link>
                <router-link class="nav-item" to="/about">关于</router-link>
            </p>
        </div>
        <div>
            <router-view></router-view>
        </div>
        <footer-tab></footer-tab>
    </div>
</template>

<script>
import HeaderTab from './components/header.vue';
import HeaderAddTab from './components/header_add.vue';
import FooterTab from './components/footer.vue';
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        HeaderTab, FooterTab, HeaderAddTab
    }
}
</script>
