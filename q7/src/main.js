import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';

import './assets/styles/base.less';
import './assets/less/main.less';

Vue.config.debug = true;

new Vue({
    router,
    el: '#appIndex',
    render: h => h(App)
})