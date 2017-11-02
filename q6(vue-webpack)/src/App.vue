<template>
    <div id="app">
        <header-tab></header-tab>
        <header-add-tab></header-add-tab>
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
