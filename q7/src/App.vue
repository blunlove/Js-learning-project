<template>
    <div id="app">
        <header-tab></header-tab>
        <div class="real_body">
            <div class="icon1"></div>
            <suo-yin></suo-yin>
            <second-menu></second-menu>
            <router-view></router-view>
        </div>
        <div class="alunimage">
            <div class="alunimage_mask">
                <div></div>
            </div>
        </div>
        <standard></standard>
        <footer-tab></footer-tab>
    </div>
</template>

<script>

import HeaderTab from './components/header.vue';
import SecondMenu from './components/second_menu.vue';
import SuoYin from './components/suoyin.vue';
import Standard from './components/standard.vue';
import FooterTab from './components/footer.vue';
export default {
    name: 'app',
    components: {
        HeaderTab,
        SecondMenu,
        SuoYin,
        Standard,
        FooterTab,
    },
}
</script>
