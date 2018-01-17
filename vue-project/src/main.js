import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./routes.js";
import store from "./store.js";

import "./assets/less/base.less";

Vue.prototype.$http = axios;

new Vue({
    store,
    router,
    el: "#appIndex",
    render: h => h(App)
});
