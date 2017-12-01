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
    '35G-3022': {
        name: '35G高脚-2连体(螺纹)',
        english1: '35mm High foot-2',
        english2: 'joint (thread)',
    },
    '35S-3026': {
        name: '35S平脚上封水',
        english1: '35mm Flat foot',
        english2: 'water sealing',
    },
    '35G-3032': {
        name: '35G高脚上封水-1',
        english1: '35mm High foot',
        english2: 'sealing water-1',
    },
    '40P-2016': {
        name: '40P-180°太阳能',
        english1: '40mm-180° Solar energy',
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