<template>
    <div class="body_index">
        <div>index</div>
        <div class="suoyin">
            <div class="position_menu">
                <ul>
                    <li v-for="menu in position_menu" :class="menu.class">{{ menu.name }}</li>
                    <li class="position_18">
                        <div class="position_18_image">排序</div>
                    </li>
                </ul>
            </div>
            <div class="baffle"></div>
            <div class="back_top">
                <div class="back_top_image"></div>
            </div>
            <div class="mobilePhone"
                @click="toTop()"
                :style="style"
                v-on:mouseover="mobilePhone_over()"
                v-on:mouseleave="mobilePhone_leave()">
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

for (let i = 0; i < 17; i++) {
    position_menu[i].class = 'position_' + (i + 1).toString();
}

let mobilePhone = {
    isAnimation: false,
    isLeaving: false,
    begin: false,
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
    name: 'index',
    data() {
        return {
            style: '',
            position_menu: position_menu,
        }
    },
    methods: {
        mobilePhone_animation () {
            setTimeout(() => {
                mobilePhone.isAnimation = true;
                if (mobilePhone.isLeaving == true){
                    mobilePhone.frame--;
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
                }else {
                    mobilePhone.isLeaving = false;
                    mobilePhone.isAnimation = false;
                    mobilePhone.begin = false;
                }
            }, 100);
        },
        mobilePhone_over () {
            mobilePhone.isLeaving = false;
            if (!mobilePhone.begin) {
                mobilePhone.begin = true;
                this.mobilePhone_animation();
            }
        },
        mobilePhone_leave () {
            if (!mobilePhone.isAnimation) {
                return;
            }
            mobilePhone.isLeaving = true;
            if (mobilePhone.frame > 10) {
                mobilePhone.frame = 10;
            }
        },
        toTop
    }
}
</script>