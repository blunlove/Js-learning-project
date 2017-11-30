<template>
    <div class="goods">
        <div v-for="item in faxinType"
            is="goods-menu"
            :faxinClass="item"
            :goods="goods"
            >
        </div>
    </div>
</template>

<script>
let goods = {
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
        english1: '40mm Single seal',
        english2: ' red ring temperature adjustment',
    },
    '40P-2024': {
        name: '40P单密封红圈调温',
        english1: '40mm Single seal',
        english2: 'red ring temperature adjustment',
    },
    '40P-2023K': {
        name: '40P空转',
        english1: '40mm Idle',
    },
    '40P-2022': {
        name: '40P-806-3',
        english1: '40mm Double sealed',
        english2: 'copper rod',
    },
    '40P-2021': {
        name: '40P-806-1',
        english1: '40mm-806-1',
    },
    '40P-2020': {
        name: '40P-806三挡',
        english1: '40mm-806 three block',
    },
    '40P-2019': {
        name: '40P-806透明',
        english1: '40mm-806 transparency',
    },
    '40P-2017': {
        name: '40P-806铜杆',
        english1: '40mm-806 copper rod',
    },
    '40P-2016': {
        name: '40P-180°太阳能',
        english1: '40mm-180° Solar energy',
    },
    '40G-2014K': {
        name: '40G高脚空转',
        english1: '40mm High foot turn',
    },
    '40P-2013F': {
        name: '40P反向空转',
        english1: '40mm Reverse rotation',
    },
    '40P-2012K': {
        name: '40P空转-2',
        english1: '40mm Idle-2',
    },
    '40P-2011K': {
        name: '40P空转-1',
        english1: '40mm Idle-1',
    },
    '35G-3036': {
        name: '35G高脚红圈调温',
        english1: '35mm High foot',
        english2: 'red ring temperature adjustment',
    },
    '35P-3035': {
        name: '35P双密封铜杆',
        english1: '35mm Double sealed',
        english2: 'copper rod',
    },
    '35P-3034': {
        name: '35P单密封红圈调温',
        english1: '35mm Single seal',
        english2: 'red ring temperature adjustment',
    },
    '35P-3033': {
        name: '35P双密封红圈调温',
        english1: '35mm Double seal',
        english2: 'red ring temperature adjustment',
    },
    '35G-3032': {
        name: '35G高脚上封水-1',
        english1: '35mm High foot',
        english2: 'sealing water-1',
    },
    '35G-3031': {
        name: '35G高脚铜杆',
        english1: '35mm High foot',
        english2: 'copper rod',
    },
    '35P-3030': {
        name: '35P-302-3',
        english1: '35mm 302-3',
    },
    '35P-3029': {
        name: '35P-302-2',
        english1: '35mm 302-2',
    },
    '35P-3028': {
        name: '35P-302-1',
        english1: '35mm 302-1',
    },
    '35G-3027': {
        name: '35G边进水',
        english1: '35mm edge water',
    },
    '35S-3026': {
        name: '35S平脚上封水',
        english1: '35mm Flat foot',
        english2: 'water sealing',
    },
    '35P-3025': {
        name: '35P-360°',
        english1: '35mm 360°',
    },
    '35P-3024': {
        name: '35P-302二挡',
        english1: '35mm 302 two block',
    },
    '35G-3022': {
        name: '35G高脚-2连体(螺纹)',
        english1: '35mm High foot-2',
        english2: 'joint (thread)',
    },
    '35P-3021K': {
        name: '35P空转',
        english1: '35mm Idle',
    },
    '35P-3018': {
        name: '35P透明303',
        english1: '35mm Transparent 303',
    },
    '35P-3017': {
        name: '35P-302铜杆',
        english1: '35mm 302 copper rod',
    },
    '35P-3016': {
        name: '35P-180°太阳能',
        english1: '35mm 180° Solar energy',
    },
    '35G-3014K': {
        name: '35G高脚空转',
        english1: '35mm High foot turn',
    },
    '35P-3013F': {
        name: '35P反向空转',
        english1: '35mm Reverse rotation',
    },
    '35P-3012K': {
        name: '35P空转-2',
        english1: '35mm Idle-2',
    },
    '35P-3011K': {
        name: '35P空转-1',
        english1: '35mm Idle-1',
    },
    '25P-3023K': {
        name: '25P空转',
        english1: '25mm Idle',
    },
    'AN-1023': {
        name: '按钮阀芯22.5',
        english1: '22.5mm Button valve core',
    },
    '26P-1022': {
        name: '26中间关分水阀',
        english1: '26mm Intermediate',
        english2: 'water separation valve',
    },
    '28P-1021': {
        name: '28四孔分水阀',
        english1: '35mm Four hole',
        english2: 'water separation valve',
    },
    '33P-1020': {
        name: '33中间关分水阀',
        english1: '33mm Intermediate',
        english2: 'water separation valve',
    },
    '33P-1019F': {
        name: '33三挡-1',
        english1: '33mm Three block-1',
    },
    '25P-1018D': {
        name: '25单冷',
        english1: '25mm Single cold',
    },
    '22P-1017F': {
        name: '22-三挡-3',
        english1: '22mm Three block-3',
    },
    '22P-1016F': {
        name: '22-2',
        english1: '22mm 22-2',
    },
    '22P-1015F': {
        name: '22-1',
        english1: '22mm 22-1',
    },
    '26P-1014F': {
        name: '26三挡',
        english1: '26mm Three block',
    },
    '25P-1012': {
        name: '25-180°-2',
        english1: '25mm 180°-2',
    },
    '22P-1011': {
        name: '25-90°-1',
        english1: '25mm 90°-1',
    },
}
for (let key in goods) {
    goods[key].name2 = key;
    goods[key].icon = require(`../assets/imgs/goods/${key}/icon.jpg`);
}
let faxinType = [
    {
        class: 'faxin_40',
        chinese: '40毫米阀芯',
        english: '40mm valve core',
        connect: [
            '40G-2028',
            '40P-2027',
            '40G-2026',
            '40P-2025',
            '40P-2024',
            '40P-2023K',
            '40P-2022',
            '40P-2021',
            '40P-2020',
            '40P-2019',
            '40P-2017',
            '40P-2016',
            '40G-2014K',
            '40P-2013F',
            '40P-2012K',
            '40P-2011K',
        ],
    },

    {
        class: 'faxin_35',
        chinese: '35毫米阀芯',
        english: '35mm valve core',
        connect: [
            '35G-3036',
            '35P-3035',
            '35P-3034',
            '35P-3033',
            '35G-3032',
            '35G-3031',
            '35P-3030',
            '35P-3029',
            '35P-3028',
            '35G-3027',
            '35S-3026',
            '35P-3025',
            '35P-3024',
            '35G-3022',
            '35P-3021K',
            '35P-3018',
            '35P-3017',
            '35P-3016',
            '35G-3014K',
            '35P-3013F',
            '35P-3012K',
            '35P-3011K',
        ],
    },
    {
        class: 'faxin_other',
        chinese: '其他阀芯',
        english: 'other valve core',
        connect: [
            '25P-3023K',
            'AN-1023',
            '26P-1022',
            '28P-1021',
            '33P-1020',
            '33P-1019F',
            '25P-1018D',
            '22P-1017F',
            '22P-1016F',
            '22P-1015F',
            '26P-1014F',
            '25P-1012',
            '22P-1011',
        ],
    },
]

import GoodsMenu from '../components/goods_menu.vue';
export default {
    name: 'goods',
    data() {
        return {
            faxinType: faxinType,
            goods: goods,
        }
    },
    components: {
        GoodsMenu,
    }
}
</script>