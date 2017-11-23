<template>
    <div class="child_module_rank2">
        <div class="child_module_rank2_top">
            <div class="child_module_rank2_top_title">排行</div>
            <div class="child_module_rank2_top_days">
                <div class="child_module_rank2_top_days_item">
                    {{ days[0] }}
                </div>
                <div class="child_module_rank2_top_days_item" @click="changeDays()">
                    {{ days[1] }}
                </div>
                <div class="child_module_rank2_top_days_arrow"></div>
            </div>
        </div>
        <div class="child_module_rank2_connent">
            <div v-for="(item, index) in ranks" class="child_module_rank2_connent_item">
                <div class="child_module_rank2_connent_item_head">{{ index + 1 }}</div>
                <div class="child_module_rank2_connent_item_title">
                    {{ item.title }}
                    <span class="child_module_rank2_connent_item_episodes">{{ item.episodes }}</span>
                </div>
            </div>
        </div>
        <div class="child_module_rank2_connent_more">
            查看更多
            <div class="child_module_rank2_connent_more_arrow"></div>
        </div>
    </div>
</template>
<script>
let ranks = [
    {
        title: '干物妹！小埋R',
        episodes: '更新至第7话',
    },
    {
        title: '十二大战',
        episodes: '更新至第8话',
    },
    {
        title: '如果有妹妹就好了。',
        episodes: '更新至第7话',
    },
    {
        title: '黑色四叶草',
        episodes: '更新至第8话',
    },
    {
        title: '博人传 火影忍者新时代',
        episodes: '更新至第34话',
    },
    {
        title: '品酒要在成为夫妻后',
        episodes: '更新至第8话',
    },
    {
        title: 'UQ HOLDER！悠久持有者！',
        episodes: '更新至第8话',
    },
    {
        title: 'Fate/Apocrypha',
        episodes: '更新至第19.5话',
    },
    {
        title: '宝石之国',
        episodes: '更新至第7话',
    },
    {
        title: '幻界战线 & BEYOND',
        episodes: '更新至第7话',
    },
]
let days = [
    '三日',
    '一周',
]

export default {
    name: 'child_module_rank_2',
    data() {
        return {
            days: days,
            ranks: ranks,
        }
    },
    methods: {
        changeDays() {
            this.days.reverse();
        },
    }
}
</script>