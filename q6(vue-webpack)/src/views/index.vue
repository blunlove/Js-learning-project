<template>
    <div class="body_index">
        <carousel></carousel
        ><hot-video></hot-video>
        <extension>
            <titlemenu>
                <div>推广</div>
                <span>我喜欢篮球队的电视君</span>
            </titlemenu>
        </extension>
        <live-module></live-module>
        <div v-for="item in modules" is="child-module" :moduledata="item"></div>
        <suoyin></suoyin>
    </div>
</template>

<script>
let modules = [
    {
        image_position: {
            'background-position': '-140px -908px'
        },
        title: '动画',
        fire: '2017年10月精彩作画集锦',
        news: '205',
    },
    // {
    //     image_position: {
    //         'background-position': '-140px -780px'
    //     },
    //     title: '番剧动态',
    //     fire: '史上最“贵”动画',
    //     news: '1246',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -140px'
    //     },
    //     title: '国产原创相关',
    //     fire: '狐妖&一人 同人绘画大赛',
    //     news: '363',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -268px'
    //     },
    //     title: '音乐',
    //     fire: 'emoji表情的魔性应用',
    //     news: '1849',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -461px'
    //     },
    //     title: '舞蹈',
    //     fire: '胡萝卜到底辣不辣！',
    //     news: '760',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -203px'
    //     },
    //     title: '游戏',
    //     fire: '刺客信念的起源原因是？',
    //     news: '5512',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -526px'
    //     },
    //     title: '科技',
    //     fire: '海洋究竟有多深？',
    //     news: '2388',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -970px'
    //     },
    //     title: '生活',
    //     fire: '好吃到爆衣的中华小吃!',
    //     news: '5779',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -332px'
    //     },
    //     title: '鬼畜',
    //     fire: '我就是要在鬼畜区唱豫剧！!',
    //     news: '688',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -718px'
    //     },
    //     title: '时尚',
    //     fire: '巧克力混血妆!',
    //     news: '1896',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -1229px'
    //     },
    //     title: '广告',
    //     fire: '撩妹技能哪家强!',
    //     news: '31',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -1032px'
    //     },
    //     title: '娱乐',
    //     fire: '华晨宇戴面具惊艳献唱',
    //     news: '1711',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -395px'
    //     },
    //     title: '电影',
    //     fire: '《你的名字。》免费放送~',
    //     news: '67',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -846px'
    //     },
    //     title: '电视剧',
    //     fire: '《猎场》上线啦ヽ(°▽°)ノ！',
    //     news: '280',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -1358px'
    //     },
    //     title: '影视',
    //     fire: '一场伟大的谋杀！阿加莎与她的东方快车谋杀案',
    //     news: '3365',
    // },
    // {
    //     image_position: {
    //         'background-position': '-140px -1292px'
    //     },
    //     title: '纪录片',
    //     fire: 'biu！可爱担当上线',
    //     news: '839',
    // },
]

import Carousel from '../components/carousel.vue';
import Suoyin from '../components/suoyin.vue';
import HotVideo from '../components/hot_video.vue';
import Extension from '../components/extension.vue';
import titlemenu from '../components/title_menu.vue';
import LiveModule from '../components/live_module.vue';
import ChildModule from '../components/child_module.vue';
export default {
    name: 'index',
    data() {
        return {
            modules: modules,
        }
    },
    components: {
        Carousel,
        Suoyin,
        HotVideo,
        Extension,
        titlemenu,
        LiveModule,
        ChildModule,
    }
}
</script>