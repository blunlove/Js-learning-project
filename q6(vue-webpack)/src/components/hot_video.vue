<template>
    <div class="hot_video">
        <div v-for="(item, index) in data" :class="'hot_video_time_' + index">
            <div class="hot_video_time_label">
                <div v-for="(label, index) in item.label" :class="'hot_video_time_label_' + index">
                    {{ label }}
                    <div :class="'hot_video_time_label_arrow_' + index"></div>
                </div>
            </div>
            <div v-for="(video, index) in item.hot_video"
                :class="'hot_video_time_item hot_video_' + index"
                :style="{backgroundImage: `url(${video.image})`}"
                >
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
                title: '【原创】初音未来V4中文版《草设惊一》《初梦》',
                up: 'MikaiMusic未开封音',
                plays: '3.0万',
            },
            {},
            {},
            {},
            {},
            {},
        ],
    },
];

for (let key in data[0].hot_video) {
    data[0].hot_video[key].image = require(`../assets/imgs/hot_video/hot_video${key}.jpg`);
}

export default {
    name: 'hot_video',
    data() {
        return {
            data: data,
        }
    },
}
</script>