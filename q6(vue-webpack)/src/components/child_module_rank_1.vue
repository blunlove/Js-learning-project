<template>
    <div class="child_module_rank">
        <div class="child_module_rank_top">
            <div class="child_module_rank_top_title">排行</div>
            <div class="child_module_rank_top_button">
                <div v-for="(item, index) in buttons" :class="['child_module_rank_top_button_item', {child_module_rank_top_button_item_on: buttonState == index}]"
                    @mouseover="changeState(index)">
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
                <div class="child_module_rank_top_days_item" @click="changeDays()">
                    {{ days[1] }}
                </div>
                <div class="child_module_rank_top_days_arrow"></div>
            </div>
        </div>
        <div class="child_module_rank_connent" :style="{left: rank_connent_position}">
            <div v-for="rank in ranks" class="child_module_rank_all">
                <div v-for="(item, index) in rank" class="child_module_rank_all_item" v-if="index == 0">
                    <div class="child_module_rank_all_item_head">{{ index + 1 }}</div>
                    <div class="child_module_rank_all_item_title first">
                        <div class="child_module_rank_all_item_image" :style="{backgroundImage: `url(${item.image})`}">
                            <div :class="['watchlater', {'add': item.watchlater}, {'delete': !item.watchlater}]" @click="item.watchlater = !item.watchlater">
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
</template>
<script>
let ranks = [
    [
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
    ],
    [
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
    ],
]
let days = [
    '三日',
    '一周',
]
let buttons = [
    {class: 'all', connent: '全部'},
    {class: 'original', connent: '原创'},
]

export default {
    name: 'child_module_rank_1',
    data() {
        return {
            days: days,
            ranks: ranks,
            buttons: buttons,
            buttonState: 0,
            rank_connent_position: '0px',
        }
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