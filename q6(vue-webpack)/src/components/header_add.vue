<template>
<div class="headerAdd">
    <ul class="headerAdd_menu">
        <li class="headerAdd_menu_item index">
            <div class="headerAdd_menu_item_topImage"></div>
            <div>首页</div>
        </li
        ><li v-for="menu in menus_left" class="headerAdd_menu_item left_item">
            <div class="headerAdd_menu_item_newsNumber">{{ menu.newsNumber }}</div>
            <div>{{ menu.name }}</div>
        </li
        ><li v-for="menu in menus_right" :class="'headerAdd_menu_item right_item ' + menu.class">
            <div class="headerAdd_menu_item_topImage"></div>
            <div>{{ menu.name }}</div>
        </li>
    </ul>
    <div class="special_gif"></div>
</div>
</template>

<script>
let menus_left = [
    { name: '动画', newsNumber: '288' },
    { name: '番剧', newsNumber: '48' },
    { name: '国创', newsNumber: '48' },
    { name: '音乐', newsNumber: '505' },
    { name: '舞蹈', newsNumber: '92' },
    { name: '游戏', newsNumber: '999+' },
    { name: '科技', newsNumber: '461' },
    { name: '生活', newsNumber: '999+' },
    { name: '鬼畜', newsNumber: '18' },
    { name: '时尚', newsNumber: '292' },
    { name: '广告', newsNumber: '46' },
    { name: '娱乐', newsNumber: '814' },
    { name: '影视', newsNumber: '482' },
    { name: '放映厅', newsNumber: '54' },
];
let menus_right = [
    { name: '专栏', class: 'special' },
    { name: '广场', class: 'square' },
    { name: '直播', class: 'liveBroadcast' },
    { name: '小黑屋', class: 'blackHouse' },
];
export default {
    name: 'home',
    data() {
        return {
            menus_left: menus_left,
            menus_right: menus_right,
        }
    },
    methods: {
        eClick() {
            console.log(9999);
        }
    }
}
</script>