<template>
    <div class="header">
        <div class="header_line">
            <div class="header_line_under">
                <div class="header_line_under_filter"></div>
                <div class="header_line_under_color"></div>
            </div>
            <div class="header_line_menu">
                <div class="header_line_menu_left">
                    <ul>
                        <li v-for="menu in menus_left" :class="'menu menu_left ' + menu.class + menu.size">
                            <a class="i-link">
                                <span>{{ menu.name }}</span>
                            </a>
                            <div v-if="menu.child == 1" :class="menu.class + ' curtain'">
                                <component :is="menu.class + '-menu'"></component>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="header_line_menu_right">
                    <ul>
                        <li v-for="menu in menus_right" :class="'menu menu_right ' + menu.class + menu.size">
                            <a class="i-link">
                                <span>{{ menu.name }}</span>
                            </a>
                            <div :class="menu.class + ' curtain'">
                                <component :is="menu.class + '-menu'"></component>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="userPortrait">
                    <div class="userPortrait_image"></div>
                </div>
            </div>
        </div>
        <a id="logo"></a>
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
    { name: '主站', class: 'home', size: ' first', child: 0 },
    { name: '画友', class: 'friend', size: ' third', child: 0 },
    { name: '游戏中心', class: 'game', size: ' first', child: 1 },
    { name: '直播', class: 'live', size: ' third', child: 1 },
    { name: '会员购', class: 'pay', size: ' second', child: 0 },
    { name: '周边', class: 'real-things', size: ' third', child: 0 },
    { name: '移动端', class: 'mobile', size: ' second', child: 1 },
];
let menus_right = [
    { name: '消息', class: 'message', size: ' third' },
    { name: '动态', class: 'dynamic', size: ' third' },
    { name: '稍后再看', class: 'later', size: ' first' },
    { name: '收藏夹', class: 'favorite', size: ' second' },
    { name: '历史', class: 'history', size: ' third' },
    { name: '投稿', class: 'submission', size: ' second' },
];
export default {
    name: 'headerMenu_left',
    data() {
        return {
            menus_left: menus_left,
            menus_right: menus_right
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
