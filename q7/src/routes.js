import Vue from 'vue';
import Router from 'vue-router';
import indexPage from './views/index.vue';
import goodsPage from './views/goods.vue';
import aboutPage from './views/about.vue';
import detailPage from './views/detail.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: indexPage,
        },
        {
            path: '/goods',
            component: goodsPage,
        },
        {
            path: '/about',
            component: aboutPage,
        },
        {
            path: '/detail',
            component: detailPage,
        },
    ]
})