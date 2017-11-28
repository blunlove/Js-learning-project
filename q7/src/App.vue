<template>
    <div id="app">
        <header-tab></header-tab>
        <footer-tab></footer-tab>
        <div class="real_body">
            <div class="icon1"></div>
            <header-menu></header-menu>
            <div class="real_body_connect">
                <second-menu></second-menu>
                <router-view></router-view>
            </div>
            <footer-menu></footer-menu>
            <suo-yin></suo-yin>
        </div>
    </div>
</template>

<script>

import HeaderTab from './components/header.vue';
import HeaderMenu from './components/header_menu.vue';
import SecondMenu from './components/second_menu.vue';
import FooterMenu from './components/footer_menu.vue';
import SuoYin from './components/suoyin.vue';
import FooterTab from './components/footer.vue';
export default {
    name: 'app',
    components: {
        HeaderTab,
        HeaderMenu,
        SecondMenu,
        FooterMenu,
        SuoYin,
        FooterTab,
    },
}
</script>
