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
                        <li v-for="menu in menus" :class="menu.class">
                            <a class="i-link">
                                <span>{{ menu.name }}</span>
                            </a>
                            <div v-if="menu.child" :class="menu.child_class">
                                {{ menu.child_class.substr(11) }}
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
let menus = [
    { name: '主站', class: 'menu home', child: false },
    { name: '画友', class: 'menu friend', child: false },
    { name: '游戏中心', class: 'menu game', child: true, child_class: 'child_menu game-page' },
    { name: '直播', class: 'menu live', child: true, child_class: 'child_menu live-page' },
    { name: '会员购', class: 'menu pay', child: false },
    { name: '周边', class: 'menu real-things', child: false },
    { name: '移动端', class: 'menu mobile', child: true, child_class: 'child_menu mobile-page' },
]
export default {
    name: 'headerMenu_left',
    data() {
        return {
            menus: menus
        }
    },
    methods: {

    }
}
</script>
