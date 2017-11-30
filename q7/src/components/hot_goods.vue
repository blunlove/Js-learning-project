<template>
    <div class="hot_goods">
        <child-title :headerData="title_data"></child-title>
        <div class="hot_goods_connect">
            <div v-for="item in hot_goods"
                is="good-module"
                :good="item"
                >
            </div>
        </div>
    </div>
</template>

<script>
let hot_goods = {
    '40G-2028': {
        name: '40G高脚红圈调温',
        english1: '40mm High foot',
        english2: 'red ring temperature adjustment',
    },
    '40P-2027': {
        name: '40P双密封红圈调温',
        english1: '40mm Double seal',
        english2: 'red ring temperature adjustment',
    },
    '40G-2026': {
        name: '40G高脚铜杆',
        english1: '40mm High foot',
        english2: 'copper rod',
    },
    '40P-2025': {
        name: '40P双密封铜杆',
        english1: '40mm Double sealed',
        english2: 'copper rod',
    },
}
for (let key in hot_goods) {
    hot_goods[key].name2 = key;
    hot_goods[key].icon = require(`../assets/imgs/goods/${key}/icon.jpg`);
}
let title_data = {
    chinese: '热门产品',
    english: 'Hot products',
}

import ChildTitle from './child/child_title.vue';
import GoodModule from './child/good_module.vue';
export default {
    name: 'hot_goods',
    data() {
        return {
            hot_goods: hot_goods,
            title_data: title_data,
        }
    },
    components: {
        ChildTitle,
        GoodModule,
    }
}
</script>