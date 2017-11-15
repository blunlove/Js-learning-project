<template>
    <div class="suoyin_road">
        <div class="suoyin" :style="style_suoyin">
            <div class="position_menu">
                <ul>
                    <li v-for="(menu, index) in position_menu" :class="'position_' + index">{{ menu.name }}</li>
                    <li class="position_18">
                        <div class="position_18_image">排序</div>
                    </li>
                </ul>
            </div>
            <div class="baffle"></div>
            <div class="back_top" @click="toTop()">
                <div class="back_top_image"></div>
            </div>
            <div class="mobilePhone" :style="style" v-on:mouseover="mobilePhone_over()" v-on:mouseleave="mobilePhone_leave()">
                <div class="mobilePhone_download_image"></div>
            </div>
        </div>
    </div>
</template>

<script>

let position_menu = [
    { name: '直播' },
    { name: '动画' },
    { name: '番剧' },
    { name: '国创' },
    { name: '音乐' },
    { name: '舞蹈' },
    { name: '游戏' },
    { name: '科技' },
    { name: '生活' },
    { name: '鬼畜' },
    { name: '时尚' },
    { name: '广告' },
    { name: '娱乐' },
    { name: '电影' },
    { name: 'TV剧' },
    { name: '影视' },
    { name: '纪录片' },
];

let mobilePhone = {
    state: 0,
    frame: 0,
};
let scrolling = false;

const disable_mousewheel = boolean => {
    if (boolean) {
        $(document).bind('mousewheel', () => false);
    }else {
        $(document).unbind('mousewheel');
    }
}

const toTop = () => {
    if (!scrolling) {
        scrolling = true;
        disable_mousewheel(true);
        $("body").animate({
            scrollTop: 0
        }, 500, () => {
            scrolling = false;
            disable_mousewheel(false);
        });
    }
}

export default {
    name: 'suoyin',
    data() {
        return {
            style: '',
            position_menu: position_menu,
            style_suoyin: '',
        }
    },
    methods: {
        mobilePhone_animation () {
            setTimeout(() => {
                if (!mobilePhone.state){
                    if (mobilePhone.frame > 0) {
                        mobilePhone.frame--;
                    }else {
                        return;
                    }
                }else {
                    mobilePhone.frame++;
                    if ( mobilePhone.frame > 15 ) {
                        mobilePhone.frame = mobilePhone.frame - 6;
                    }
                }
                let px = mobilePhone.frame * 80;
                this.style = `background-position: -${px}px`;
                if (mobilePhone.frame > 0){
                    this.mobilePhone_animation();
                }
            }, 100);
        },
        mobilePhone_over () {
            mobilePhone.state = 1;
            if (mobilePhone.frame == 0){
                this.mobilePhone_animation();
            }
        },
        mobilePhone_leave () {
            mobilePhone.state = 0;
            if (mobilePhone.frame > 10) {
                mobilePhone.frame = 10;
            }
        },
        toTop,
    },
    mounted() {
        let position_menu_state = 0;
        $(document).scroll(() => {
            let now_scroll = $(document).scrollTop();
            if (now_scroll > 170) {
                position_menu_state = 1;
            }else {
                position_menu_state = 0;
            }
            if (position_menu_state) {
                this.style_suoyin = 'top: 50%; margin-top: -410px';
            }else {
                this.style_suoyin = 'top: 250px; margin-top: 0';
            }
        });
    },
}
</script>