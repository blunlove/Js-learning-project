<template>
    <div id="app">
        <div class="head">
            <div class="header_line">
                <div class="header_line_under">
                    <div class="header_line_under_filter"></div>
                    <div class="header_line_under_color"></div>
                </div>
            </div>
        </div>
        <div class="real_body">
            <header-tab></header-tab>
            <second-header-tab></second-header-tab>
            <router-view></router-view>
        </div>
        <footer-tab></footer-tab>
    </div>
</template>

<script>
import HeaderTab from './components/header.vue';
import SecondHeaderTab from './components/second_header.vue';
import FooterTab from './components/footer.vue';
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        HeaderTab, FooterTab, SecondHeaderTab
    }
}
</script>
