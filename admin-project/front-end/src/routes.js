import Vue from "vue";
import Router from "vue-router";
import indexPage from "./components/index.vue";
import aboutPage from "./components/about.vue";
import store from "./store.js";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: indexPage,
        },
        {
            path: "/about",
            component: aboutPage,
        },
    ],
});
