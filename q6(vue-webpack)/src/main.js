import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
// import less from 'less'

import './assets/styles/base.css'
import './assets/less/reset.less'
Vue.config.debug = true;

new Vue({
    router,
    el: '#appIndex',
    render: h => h(App)
})