<template>
    <div class="header_back">
        <div class="header_menu">
            <div class="header_menu_left">
                <ul>
                    <li v-for="menu in menus_left" :class="'menu ' + menu.class">
                        <div class="menu_item">
                            <div class="menu_item_under"></div>
                            <div class="menu_item_word">{{ menu.name }}</div>
                        </div>
                        <div v-if="menu.child == 1" :class="'curtain'">
                            <component :is="menu.class + '-menu'"></component>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="submission_icon"></div>
            <div class="header_menu_right">
                <ul>
                    <li v-for="menu in menus_right" :class="'menu ' + menu.class">
                        <div class="menu_item">
                            <div class="menu_item_under"></div>
                            <div class="menu_item_word">{{ menu.name }}</div>
                        </div>
                        <div :class="'curtain'">
                            <component :is="menu.class + '-menu'"></component>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="userPortrait">
                <div class="userPortrait_image"></div>
            </div>
        </div>
        <!--about页面测试-->
        <a id="logo" :is="'router-link'" to="/about"></a>
        <div class="search">
            <div class="search_button search_rankList">
                <div class="search_rankList_image">排行榜</div>
            </div>
            <div class="magnifier"></div>
            <input class="search_button search_frame" :placeholder="search_value">
        </div>
    </div>
</template>
<script>
import gameMenu from '../child_menu/game.vue';
import liveMenu from '../child_menu/live.vue';
import mobileMenu from '../child_menu/mobile.vue';
import messageMenu from '../child_menu/message.vue';
import dynamicMenu from '../child_menu/dynamic.vue';
import laterMenu from '../child_menu/later.vue';
import favoriteMenu from '../child_menu/favorite.vue';
import historyMenu from '../child_menu/history.vue';
import submissionMenu from '../child_menu/submission.vue';
let menus_left = [
    { name: '主站', class: 'home', child: 0 },
    { name: '画友', class: 'friend', child: 0 },
    { name: '游戏中心', class: 'game', child: 1 },
    { name: '直播', class: 'live', child: 1 },
    { name: '会员购', class: 'pay', child: 0 },
    { name: '周边', class: 'real-things', child: 0 },
    { name: '移动端', class: 'mobile', child: 1 },
];
let menus_right = [
    { name: '消息', class: 'message' },
    { name: '动态', class: 'dynamic' },
    { name: '稍后再看', class: 'later' },
    { name: '收藏夹', class: 'favorite' },
    { name: '历史', class: 'history' },
    { name: '投稿', class: 'submission' },
];
let search_value = '高燃预警！看童话镇秒变生化镇'

export default {
    name: 'header',
    data() {
        return {
            menus_left: menus_left,
            menus_right: menus_right,
            search_value: search_value,
        }
    },
    methods: {
        
    },
    components: {
        gameMenu,
        liveMenu,
        mobileMenu,
        messageMenu,
        dynamicMenu,
        laterMenu,
        favoriteMenu,
        historyMenu,
        submissionMenu
    }
}
</script>
