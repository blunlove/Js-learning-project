<template>
    <div id="app">
        <header-tab></header-tab>
        <div class="real_body">
            <header-menu></header-menu>
            <second-menu></second-menu>
            <div class="about_menu_road">
                <about-menu></about-menu>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderTab from './components/header.vue';
import HeaderMenu from './components/header_menu.vue';
import SecondMenu from './components/second_menu.vue';
import AboutMenu from './components/about_menu.vue';
import FooterTab from './components/footer.vue';
export default {
    name: 'app',
    components: {
        HeaderTab,
        HeaderMenu,
        SecondMenu,
        AboutMenu,
        FooterTab,
    }
}
</script>
