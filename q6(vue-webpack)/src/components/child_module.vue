<template>
    <div class="child_module">
        <div class="child_module_plate">
            <child-title :titledata="moduledata"></child-title>
            <div class="child_module_plate_video">
                <div v-for="item in video"
                    class="child_module_plate_video_item"
                    >
                    <div class="child_module_plate_video_image" :style="{backgroundImage: `url(${item.image})`}">
                        <div class="child_module_plate_video_word">
                            <div class="child_module_plate_video_word_up">{{ item.up }}</div>
                            <div class="child_module_plate_video_word_people"><div></div>{{ item.people }}</div>
                        </div>
                        <div class="child_module_plate_video_item_mask">
                            <div class="child_module_plate_video_item_mask_time">{{ item.time }}</div>
                            <div :class="['watchlater', {'add': item.watchlater}, {'delete': !item.watchlater}]"
                                @click="item.watchlater = !item.watchlater"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="child_module_plate_video_item_title">{{ item.title }}</div>
                    <div class="child_module_plate_video_item_area">
                        <div class="child_module_plate_video_item_area_plays">{{ item.plays }}</div>
                        <div class="child_module_plate_video_item_area_comment">{{ item.comment }}</div>
                    </div>
                </div>
            </div>
        </div
        ><special-recommend v-if="moduledata.title == '番剧动态'"></special-recommend
        ><child-module-rank1 v-else></child-module-rank1>
    </div>
</template>

<script>
let video = [
    {
        title: '【荷兹HeZ 】极致古风《极乐净土》',
        plays: '3.5万',
        comment: '1042',
        time: '03:39',
    },
    {
        title: '【补番推荐】那些打到天崩地裂，揍到日月无双的热血番（第一蛋）',
        plays: '4.1万',
        comment: '499',
        time: '14:20',
    },
    {
        title: '【60fpsMMD】teto：来陪我跳支舞？[A]DDICTION',
        plays: '12.9万',
        comment: '706',
        time: '04:29',
    },
    {
        title: '【新番吐个爽】看到这种宝石我顿时下体一凉，要不起啊！',
        plays: '7.8万',
        comment: '1586',
        time: '15:09',
    },
    {
        title: '【凉风】暂时完结！柯南TV动画主线剧情回顾丨其四丨朗姆篇',
        plays: '79.4万',
        comment: '1.1万',
        time: '19:32',
    },
    {
        title: '98%人没有见过的~美到窒息的~十二星座拟人化女神',
        plays: '9478',
        comment: '437',
        time: '04:38',
    },
    {
        title: '动漫电影《烟花》，将于12月1日在中国上映！由《你的名字。》核心团队再次打造~',
        plays: '11.1万',
        comment: '438',
        time: '01:40',
    },
    {
        title: '【高画质60fps】超级美的弱音和巡音劲歌热舞 你喜欢哪个？',
        plays: '45',
        comment: '0',
        time: '07:46',
    },
]
for (let key in video) {
    video[key].image = require(`../assets/imgs/child_module_video/cartoon_video${key}.jpg`);
    video[key].watchlater = true;
}

import ChildTitle from '../components/child_title.vue';
import ChildModuleRank1 from '../components/child_module_rank_1.vue';
import SpecialRecommend from '../components/special_recommend.vue';
export default {
    name: 'child_module',
    props: ['moduledata'],
    data() {
        return {
            video: video,
        }
    },
    components: {
        ChildTitle,
        ChildModuleRank1,
        SpecialRecommend,
    },
}
</script>