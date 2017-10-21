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
                        <li v-for="menu in menus" :class="'menu ' + menu.class">
                            <a class="i-link">
                                <span>{{ menu.name }}</span>
                            </a>
                            <div v-if="menu.class == 'game'" :class="'curtain ' + menu.class">
                                <game-menu></game-menu>
                            </div>
                            <div v-else-if="menu.class == 'live'" :class="'curtain ' + menu.class">
                                <live-menu></live-menu>
                            </div>
                            <div v-else-if="menu.class == 'mobile'" :class="'curtain ' + menu.class">
                                <mobile-menu></mobile-menu>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="header_line_menu_right"></div>
            </div>
        </div>
        <a id="logo"></a>
    </div>
</template>
<script>
import gameMenu from '../child_menu/game.vue';
import liveMenu from '../child_menu/live.vue';
import mobileMenu from '../child_menu/mobile.vue';
let menus = [
    { name: '主站', class: 'home' },
    { name: '画友', class: 'friend' },
    { name: '游戏中心', class: 'game' },
    { name: '直播', class: 'live' },
    { name: '会员购', class: 'pay' },
    { name: '周边', class: 'real-things' },
    { name: '移动端', class: 'mobile' },
]
export default {
    name: 'headerMenu_left',
    data() {
        return {
            menus: menus
        }
    },
    methods: {

    },
    components: {
        gameMenu, liveMenu, mobileMenu
    }
}
</script>
