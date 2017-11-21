<template>
    <div class="child_module">
        <div class="child_module_plate">
            <child-title :titledata="titledata">
                <span slot="news_button">当前共有<span class="live_online">2073</span>个在线直播</span>
            </child-title>
            <div class="child_module_plate_video">
                <div v-for="item in video"
                    class="child_module_plate_video_item"
                    >
                    <div class="child_module_plate_video_image" :style="{backgroundImage: `url(${item.image})`}">
                        <div class="live_video_word">
                            <div class="live_video_word_up">{{ item.up }}</div>
                            <div class="live_video_word_people"><div></div>{{ item.people }}</div>
                        </div>
                        <div class="live_video_item_mask" :style="{backgroundImage: `url(${item.mask})`}"></div>
                    </div>
                    <div class="live_video_item_title">{{ item.title }}</div>
                    <div class="live_video_item_area">{{ item.area }}</div>
                </div>
            </div>
        </div
        ><div class="live_menu">
            <div class="live_menu_title">
                <div v-for="(menu, index) in live_menu"
                    :class="['live_menu_title_item', {live_menu_title_item_on: buttonState == index}]"
                    @click="changeState(index)"
                    >
                    {{ menu }}
                    <div class="child_title_button_arrow">
                        <div :class="{'child_title_button_arrow_head': buttonState == index}"></div>
                        <div :class="{'child_title_button_arrow_line': buttonState == index}"></div>
                    </div>
                </div>
            </div>
            <div class="live_menu_connent" :style="{left: connent_position}">
                <div class="live_menu_connent_rank">
                    <div v-for="(item, index) in live_rank" class="live_menu_connent_rank_item">
                        <div class="live_menu_connent_rank_item_head">{{ index + 1 }}</div>
                        <div class="live_menu_connent_rank_item_icon" :style="{backgroundImage: `url(${item.image})`}"></div
                        ><div class="live_menu_connent_rank_item_word">
                            <div class="live_menu_connent_rank_item_word_up">{{ item.up }}</div>
                            <div class="live_menu_connent_rank_item_word_title">{{ item.title }}</div>
                            <div class="live_menu_connent_rank_item_watch">{{ item.people }}</div>
                        </div>
                    </div>
                </div
                ><div class="live_menu_connent_fork">
                    <div v-for="(item, index) in live_fork" class="live_menu_connent_fork_item">
                        <div class="live_menu_connent_fork_item_icon" :style="{backgroundImage: `url(${item.image})`}"></div
                        ><div class="live_menu_connent_fork_item_word">
                            <div class="live_menu_connent_fork_item_word_up">{{ item.up }}</div>
                            <div class="live_menu_connent_fork_item_word_title">{{ item.title }}</div>
                            <div class="live_menu_connent_fork_item_watch">{{ item.people }}</div>
                        </div>
                    </div>
                </div
                ><div class="live_menu_connent_recommend">
                    <div class="live_menu_connent_recommend_top">
                        <div class="live_menu_connent_recommend_top_image" :style="{left: recommend_image_position}">
                            <div v-for="item in recommend"
                                class="live_menu_connent_recommend_top_image_item"
                                :style="{backgroundImage: `url(${item.image})`}"
                                >
                                <div class="live_menu_connent_recommend_top_image_item_plate">
                                    <div class="live_menu_connent_recommend_top_image_item_plate_title">{{ item.title }}</div>
                                    <div class="live_menu_connent_recommend_top_image_item_plate_back"></div>
                                </div>
                            </div>
                        </div>
                        <div class="live_menu_connent_recommend_top_button">
                            <div v-for="(item, index) in Array(3)"
                                :class="['live_menu_connent_recommend_top_button_item',{'live_menu_connent_recommend_top_button_on': recommend_buttonState == index}]"
                                @mouseover="changeMark(index)">
                            </div>
                        </div>
                    </div>
                    <div class="live_menu_connent_recommend_down">
                        <div class="live_menu_connent_recommend_down_left"></div>
                        <div class="live_menu_connent_recommend_down_right"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let video = [
    {
        title: '❤恩兮❤刚睡醒眼睛睁不开看不到人',
        up: '元气少女恩兮酱丶',
        people: '5043',
        area: '游戏分区 · 守望先锋',
    },
    {
        title: '歪，你不要我这个小朋友了嘛QAQ',
        up: '鹿目橙子猫',
        people: '7492',
        area: '游戏分区 · 300英雄',
    },
    {
        title: '不能场均12杀，吃什么鸡！',
        up: '风竹教主解说',
        people: '4.9万',
        area: '游戏分区 · 绝地求生：大逃杀',
    },
    {
        title: '厦门的小姐姐们！',
        up: '小米粥好好喝呀qwq',
        people: '1.6万',
        area: '娱乐分区 · 手机直播',
    },
    {
        title: '二狗带你看懂王者荣耀',
        up: '梦醒三生梦',
        people: '6.3万',
        area: '手游分区 · 王者荣耀',
    },
    {
        title: '这么傻关注了！',
        up: '梦入风月',
        people: '5780',
        area: '游戏分区 · 其他游戏',
    },
    {
        title: '【大御姐】灵魂cv:后宫三千人',
        up: '裕刺Fy',
        people: '1.3万',
        area: '游戏分区 · 其他游戏',
    },
    {
        title: '米饭直播 下午有课不播',
        up: '米饭mikufan',
        people: '5436',
        area: '绘画分区 · 原创绘画',
    },
]
for (let key in video) {
    video[key].image = require(`../assets/imgs/live/live_video${key}.jpg`);
    video[key].mask = require(`../assets/imgs/live/live_mask${key}.jpg`);
}
let live_menu = [
    '直播排行',
    '关注的主播',
    '为你推荐',
]
let live_rank = [
    {
        icon: '../assets/imgs/live_rank/live_rank_icon0.jpg',
        up: '两仪滚',
        title: '【滚】开挂成仙明本性，鸡生几何也匆匆。',
        people: '10.0万',
    },
    {
        icon: '../assets/imgs/live_rank/live_rank_icon1.jpg',
        up: '宫本狗雨',
        title: '老衲今儿便是要吃一把鸡',
        people: '8.7万',
    },
    {
        icon: '../assets/imgs/live_rank/live_rank_icon2.jpg',
        up: '梦醒三生梦',
        title: '二狗带你看懂王者荣耀',
        people: '8.1万',
    },
    {
        icon: '../assets/imgs/live_rank/live_rank_icon3.jpg',
        up: 'AnKe-Poi',
        title: '【安可】只杀14个',
        people: '7.5万',
    },
    {
        icon: '../assets/imgs/live_rank/live_rank_icon4.jpg',
        up: '小天不是受QAQ',
        title: '先吃到再说吧！',
        people: '5.9万',
    },
    {
        icon: '../assets/imgs/live_rank/live_rank_icon5.jpg',
        up: '陈哥',
        title: '以撒的结合',
        people: '5.3万',
    },
]
for (let key in live_rank) {
    live_rank[key].image = require(`../assets/imgs/live_rank/live_rank_icon${key}.jpg`);
}

let live_fork = [
    {
        icon: '../assets/imgs/live_fork/live_fork_icon0.jpg',
        up: 'CG板绘原画影视UI教程',
        title: '寒假班开始啦。想学寒假班的东西加小姐姐',
        people: '1005',
    },
]
for (let key in live_fork) {
    live_fork[key].image = require(`../assets/imgs/live_fork/live_fork_icon${key}.jpg`);
}

let recommend = [
    {
        url: '../assets/imgs/recommend/recommend_image0.jpg',
        title: '23333333333',
    },
    {
        url: '../assets/imgs/recommend/recommend_image0.jpg',
        title: '听说哔哩哔哩谷上线啦？',
    },
    {
        url: '../assets/imgs/recommend/recommend_image0.jpg',
        title: 'bilibili相簿 画友千万奖励扶持来嘞~',
    },
]
for (let key in recommend) {
    recommend[key].image = require(`../assets/imgs/recommend/recommend_image${key}.jpg`);
}
let beginCarousel;
let titledata = {
    image_position: { 'background-position': '-140px -652px' },
    title: '正在直播',
    fire: '233秒居然能做这些！',
    news: '1660',
}

import ChildTitle from '../components/child_title.vue';
export default {
    name: 'live_module',
    data() {
        return {
            video: video,
            live_rank: live_rank,
            live_fork: live_fork,
            recommend: recommend,
            live_menu: live_menu,
            buttonState: 0,
            connent_position: '',
            recommend_buttonState: 0,
            recommend_image_position: '',
            titledata: titledata,
        }
    },
    methods: {
        changeState(index) {
            this.buttonState = index;
            this.connent_position = `${index * -270}px`;
        },
        restCarousel () {
            this.recommend_image_position = `${this.recommend_buttonState * -260}px`;
        },
        changeMark (index) {
            this.recommend_buttonState = index;
            this.restCarousel();
            this.autoCarousel();
        },
        autoCarousel () {
            clearInterval(beginCarousel);
            beginCarousel = setInterval(() => {
                this.recommend_buttonState = (this.recommend_buttonState + 1) % 3;
                this.restCarousel();
            }, 3000);
        },
    },
    mounted() {
        this.autoCarousel();
    },
    components: {
        ChildTitle,
    }
}
</script>