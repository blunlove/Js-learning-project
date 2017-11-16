<template>
    <div class="hot_video">
        <div class="'hot_video_plate'">
            <div class="hot_video_plate_label">
                <div v-for="(label, index) in data.label"
                    :class="'hot_video_plate_label_' + index"
                    @click="changeDay(index)"
                    >
                    {{ label }}
                    <div :class="'hot_video_plate_label_arrow_' + index"></div>
                </div>
            </div>
            <div v-for="(video, index) in data.hot_video"
                class="hot_video_plate_item"
                :style="{backgroundImage: `url(${video.image})`}"
                >
                <div class="hot_video_word">
                    <div class="hot_video_word_title">{{ video.title }}</div>
                    <div class="hot_video_word_up">{{ video.up }}</div>
                    <div class="hot_video_word_plays">{{ video.plays }}</div>
                </div>
                <div :class="['watchlater', {'add': video.watchlater}, {'delete': !video.watchlater}]"
                    @click="video.watchlater = !video.watchlater"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let data = [
    { 
        label: [
            '一周',
            '三日',
        ],
        hot_video: [
            {
                title: '迦勒底梦之声尼禄篇——尼禄陛下实在是太可爱了',
                up: 'up主：那年的黄昏',
                plays: '播放：5.0万',
            },
            {
                title: '【MMD】Tda式改變 初音、巡音、GUMI 三人『桃源戀歌』',
                up: 'up主：地板不会说谎',
                plays: '播放：9663',
            },
            {
                title: '【404】如何轻松搭讪法国女郎？【国际大网骗第四期】',
                up: 'up主：404NTFounD',
                plays: '播放：33.8万',
            },
            {
                title: '被所有人“嫌弃”的狗狗，应当得到全世界的礼赞',
                up: 'up主：喜仔的世界',
                plays: '播放：9.3万',
            },
            {
                title: '【东方MMD中文内嵌】嫦娥哟。你在看着吗！？【东方日常字幕组译制】',
                up: 'up主：帕瓦双子',
                plays: '播放：6577',
            },
            {
                title: '【神明Project】Riddle【星尘原创】【踏云社合作】',
                up: 'up主：水螅-Hydra',
                plays: '播放：8823',
            },
        ],
    },
    { 
        label: [
            '昨日',
            '一周',
        ],
        hot_video: [
            {
                title: '迦勒底梦之声尼禄篇——尼禄陛下实在是太可爱了',
                up: 'up主：那年的黄昏',
                plays: '播放：5.0万',
            },
            {
                title: '【MMD】Tda式改變 初音、巡音、GUMI 三人『桃源戀歌』',
                up: 'up主：地板不会说谎',
                plays: '播放：9663',
            },
            {
                title: '【404】如何轻松搭讪法国女郎？【国际大网骗第四期】',
                up: 'up主：404NTFounD',
                plays: '播放：33.8万',
            },
            {
                title: '被所有人“嫌弃”的狗狗，应当得到全世界的礼赞',
                up: 'up主：喜仔的世界',
                plays: '播放：9.3万',
            },
            {
                title: '【东方MMD中文内嵌】嫦娥哟。你在看着吗！？【东方日常字幕组译制】',
                up: 'up主：帕瓦双子',
                plays: '播放：6577',
            },
            {
                title: '【神明Project】Riddle【星尘原创】【踏云社合作】',
                up: 'up主：水螅-Hydra',
                plays: '播放：8823',
            },
        ],
    },
    { 
        label: [
            '三日',
            '昨日',
        ],
        hot_video: [
            {
                title: '迦勒底梦之声尼禄篇——尼禄陛下实在是太可爱了',
                up: 'up主：那年的黄昏',
                plays: '播放：5.0万',
            },
            {
                title: '【MMD】Tda式改變 初音、巡音、GUMI 三人『桃源戀歌』',
                up: 'up主：地板不会说谎',
                plays: '播放：9663',
            },
            {
                title: '【404】如何轻松搭讪法国女郎？【国际大网骗第四期】',
                up: 'up主：404NTFounD',
                plays: '播放：33.8万',
            },
            {
                title: '被所有人“嫌弃”的狗狗，应当得到全世界的礼赞',
                up: 'up主：喜仔的世界',
                plays: '播放：9.3万',
            },
            {
                title: '【东方MMD中文内嵌】嫦娥哟。你在看着吗！？【东方日常字幕组译制】',
                up: 'up主：帕瓦双子',
                plays: '播放：6577',
            },
            {
                title: '【神明Project】Riddle【星尘原创】【踏云社合作】',
                up: 'up主：水螅-Hydra',
                plays: '播放：8823',
            },
        ],
    },
];

for (let i in data) {
    for (let key in data[i].hot_video) {
        let number = parseInt(key) + i * 6;
        data[i].hot_video[key].image = require(`../assets/imgs/hot_video/hot_video${number}.jpg`);
        data[i].hot_video[key].watchlater = true;
    }
}

let begin_number = 0;
export default {
    name: 'hot_video',
    data() {
        return {
            data: data[begin_number],
        }
    },
    methods: {
        changeDay(index) {
            if (index) {
                begin_number++;
                if (begin_number > 2) {
                    begin_number = 0;
                }
                this.data = data[begin_number];
            }else {
                begin_number--;
                if (begin_number < 0) {
                    begin_number = 2;
                }
                this.data = data[begin_number];
            }
        },
    }
}
</script>