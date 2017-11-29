<template>
    <div class="hot_goods">
        <div class="hot_goods_header">热门产品</div>
        <div class="hot_goods_connect">
            <div v-for="item in hot_goods" :class="'hot_goods_connect_item hot_item_' + item.index" is="router-link" :to="{ path:'/detail', query: item }">
                <div class="hot_goods_connect_item_area_1">
                    <div class="hot_goods_connect_item_image" :style="{backgroundImage: `url(${item.icon})`}">
                    </div>
                </div
                ><div class="hot_goods_connect_item_area_2">
                    <div class="hot_goods_connect_item_title">
                        <div>{{ item.name }}</div>
                        <div>{{ item.name2 }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let hot_goods = {
    '40G-2028': {
        name: '40G高脚红圈调温',
        index: 0,
    },
    '40P-2027': {
        name: '40P双密封红圈调温',
        index: 1,
    },
    '40G-2026': {
        name: '40G高脚铜杆',
        index: 2,
    },
    '40P-2025': {
        name: '40P双密封铜杆',
        index: 3,
    },
}
for (let key in hot_goods) {
    hot_goods[key].name2 = key;
    hot_goods[key].icon = require(`../assets/imgs/goods/${key}/icon.jpg`);
}

export default {
    name: 'hot_goods',
    data() {
        return {
            hot_goods: hot_goods,
        }
    },
}
</script>