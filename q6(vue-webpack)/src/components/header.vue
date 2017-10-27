<template>
    <div class="header">
        <div class="header_line">
            <div class="header_line_under">
                <div class="header_line_under_filter"></div>
                <div class="header_line_under_color"></div>
            </div>
        </div>
        <div class="header_back">
            <a id="logo"></a>
            <div class="header_menu">
                <div class="header_menu_left">
                    <ul>
                        <li v-for="menu in menus_left" :class="'menu ' + menu.class + menu.size">
                            <a class="i-link">
                                <span>{{ menu.name }}</span>
                            </a>
                            <div v-if="menu.child == 1" :class="'curtain'">
                                <component :is="menu.class + '-menu'"></component>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="header_menu_right">
                    <ul>
                        <li v-for="menu in menus_right" :class="'menu ' + menu.class + menu.size">
                            <a class="i-link"> 
                                <span>{{ menu.name }}</span>
                            </a>
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
            <div class="animation" :style="style" v-on:mouseover="over()" v-on:mouseleave="leave()">
            </div>
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
            menus_right: menus_right,
            style: 'background-position: -00px',
            isClick: false,
            isAn: false,
            leaving: false,
            frame: 0
        }
    },
    methods: {
        animation () {
            setTimeout(() => {
                if (this.leaving == true){
                    this.frame--;
                }else {
                    this.frame++;
                    if ( this.frame > 15 ) {
                        this.frame = this.frame - 6;
                    }
                }
                let px = this.frame * 80;
                this.style = `background-position: -${px}px`;
                if (this.frame > 0){
                    this.animation();
                }else {
                    this.leaving = false;
                    this.isAn = false;
                }
            }, 100);
        },
        over () {
            if (!this.isClick) {
                this.leaving = false;
                this.isClick = true;
                if (!this.isAn) {
                    this.isAn = true;
                    this.animation();
                }
            }
        },
        leave () {
            this.leaving = true;
            this.frame = 10;
            this.isClick = false;
        }
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
