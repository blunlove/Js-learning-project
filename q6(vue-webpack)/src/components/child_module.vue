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
        ><div class="child_module_rank">
            <div class="child_module_rank_top">
                <div class="child_module_rank_top_title">排行</div>
                <div class="child_module_rank_top_button">
                    <div v-for="(item, index) in buttons"
                        class="child_module_rank_top_button_item"
                        @click="changeState(index)"
                        >
                        {{ item.connent }}
                        <div class="child_title_button_arrow">
                            <div :class="{'child_title_button_arrow_head': buttonState == index}"></div>
                            <div :class="{'child_title_button_arrow_line': buttonState == index}"></div>
                        </div>
                    </div>
                </div>
                <div class="child_module_rank_top_days">
                    <div class="child_module_rank_top_days_item">
                        {{ days[0] }}
                    </div>
                    <div class="child_module_rank_top_days_item"
                        @click="changeDays()"
                        >
                        {{ days[1] }}
                    </div>
                    <div class="child_module_rank_top_days_arrow"></div>
                </div>
            </div>
            <div class="child_module_rank_connent" :style="{left: rank_connent_position}">
                <div class="child_module_rank_all">
                    <div v-for="(item, index) in rank_all" class="child_module_rank_all_item" v-if="index == 0">
                        <div class="child_module_rank_all_item_head">{{ index + 1 }}</div>
                        <div class="child_module_rank_all_item_title first">
                            <div class="child_module_rank_all_item_image"
                                :style="{backgroundImage: `url(${item.image})`}"
                                >
                                <div :class="['watchlater', {'add': item.watchlater}, {'delete': !item.watchlater}]"
                                    @click="item.watchlater = !item.watchlater"
                                    >
                                </div>
                            </div>
                            <div class="child_module_rank_all_item_first">{{ item.title }}</div>
                            <div class="child_module_rank_all_item_score">{{ item.score }}</div>
                        </div>
                    </div>
                    <div v-else class="child_module_rank_all_item">
                        <div class="child_module_rank_all_item_head">{{ index + 1 }}</div>
                        <div class="child_module_rank_all_item_title second">{{ item.title }}</div>
                    </div>
                </div
                ><div class="child_module_rank_all">
                    <div v-for="(item, index) in rank_original" class="child_module_rank_all_item" v-if="index == 0">
                        <div class="child_module_rank_all_item_head">{{ index + 1 }}</div>
                        <div class="child_module_rank_all_item_title first">
                            <div class="child_module_rank_all_item_image"
                                :style="{backgroundImage: `url(${item.image})`}"
                                >
                                <div :class="['watchlater', {'add': item.watchlater}, {'delete': !item.watchlater}]"
                                    @click="item.watchlater = !item.watchlater"
                                    >
                                </div>
                            </div>
                            <div class="child_module_rank_all_item_first">{{ item.title }}</div>
                            <div class="child_module_rank_all_item_score">{{ item.score }}</div>
                        </div>
                    </div>
                    <div v-else class="child_module_rank_all_item">
                        <div class="child_module_rank_all_item_head">{{ index + 1 }}</div>
                        <div class="child_module_rank_all_item_title second">{{ item.title }}</div>
                    </div>
                </div>
            </div>
            <div class="child_module_rank_connent_more">
                查看更多
                <div class="child_module_rank_connent_more_arrow"></div>
            </div>
        </div>
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
let rank_all = [
    {
        image: require('../assets/imgs/child_module_rank/first_rank.jpg'),
        title: '【滚】开挂成仙明本性，鸡生几何也匆匆。',
        score: '综合评分：65.0万',
        watchlater: true,
    },
    {
        title: '烂到爆笑？火影至今最智障没有之一的篇章！博人传新忍刀七人众大吐槽',
    },
    {
        title: '10部好看的力量/动作动画',
    },
    {
        title: '【木鱼微剧场】《钢之炼金术师FA》（P9）天真的代价与约定之日',
    },
    {
        title: 'Fate系列能有今天的人气，这个男人功不可没【橙心驾校15】',
    },
    {
        title: '一月新番被称为“史上最强”，不仅有《overlord Ⅱ》，还有它？！',
    },
    {
        title: '【新番吐个爽】看到这种宝石我顿时下体一凉，要不起啊！',
    },
]
let rank_original = [
    {
        image: require('../assets/imgs/child_module_rank/first_rank.jpg'),
        title: '【滚】开挂成仙明本性，鸡生几何也匆匆。',
        score: '综合评分：65.0万',
        watchlater: true,
    },
    {
        title: '烂到爆笑？火影至今最智障没有之一的篇章！博人传新忍刀七人众大吐槽',
    },
    {
        title: '【木鱼微剧场】《钢之炼金术师FA》（P9）天真的代价与约定之日',
    },
    {
        title: 'Fate系列能有今天的人气，这个男人功不可没【橙心驾校15】',
    },
    {
        title: '一月新番被称为“史上最强”，不仅有《overlord Ⅱ》，还有它？！',
    },
    {
        title: '【新番吐个爽】看到这种宝石我顿时下体一凉，要不起啊！',
    },
    {
        title: '害死本拉登的竟然是柯南？【动漫游看点08】',
    },
]
let days = [
    '三日',
    '一周',
]
let buttons = [
    {class: 'all', connent: '全部'},
    {class: 'original', connent: '原创'},
]

import ChildTitle from '../components/child_title.vue';
export default {
    name: 'live_module',
    props: ['moduledata'],
    data() {
        return {
            video: video,
            days: days,
            rank_all: rank_all,
            rank_original: rank_original,
            buttons: buttons,
            buttonState: 0,
            rank_connent_position: '0px',
        }
    },
    components: {
        ChildTitle,
    },
    methods: {
        changeDays() {
            this.days.reverse();
        },
        changeState(index) {
            this.buttonState = index;
            this.rank_connent_position = `${this.buttonState * -270}px`;
        },
    }
}
</script>