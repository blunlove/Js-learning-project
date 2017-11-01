import Vue from 'vue';
import Router from 'vue-router';
import indexPage from './views/index.vue';
import aboutPage from './views/about.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: indexPage
        },
        {
            path: '/about',
            component: aboutPage
        }
    ]
})