<template>
    <div class="extension">
        <div class="extension_plate">
            <div class="extension_plate_top">
                <div class="extension_plate_top_image"></div>
                <div class="extension_plate_top_word">
                    推广
                    <span>我喜欢篮球队的电视君</span>
                </div>
            </div>
            <div class="extension_plate_video">
                <div v-for="(item, index) in video"
                    class="extension_plate_video_item"
                    >
                    <div class="extension_plate_video_item_image" :style="{backgroundImage: `url(${item.image})`}">
                        <div class="extension_plate_video_item_mask">
                            <div class="extension_plate_video_item_time">{{ item.time }}</div>
                        </div>
                        <div :class="['watchlater', {'add': item.watchlater}, {'delete': !item.watchlater}]"
                            @click="item.watchlater = !item.watchlater"
                            >
                        </div>
                    </div>
                    <div class="extension_plate_video_item_title">{{ item.title }}</div>
                </div>
            </div>
        </div>
        <div class="online_people">
            <div class="online_people_top">
                <span>在线人数：{{ online_people.people }}</span
                ><div></div
                ><span>最新投稿：{{ online_people.news }}</span>
            </div>
            <div class="online_people_image" :style="{backgroundImage: `url(${online_people.image})`}"></div>
        </div>
    </div>
</template>

<script>
let video = [
    {
        title: '精致猪猪女孩的一天是怎么度过！告诉我 这是你吗',
        time: '04:08',
    },
    {
        title: '【十元酱】七朵-咏春 汉服小姐姐买一送一，快来拆包裹',
        time: '03:18',
    },
    {
        title: '《恋与制作人》日语声优大公开',
        time: '02:22',
    },
    {
        title: '【上海哔哩哔哩篮球队应援团】主题曲《Bilibili × Shanghai》终于和大家见面啦！',
        time: '03:43',
    },
];

for (let key in video) {
    video[key].image = require(`../assets/imgs/extension_video/extension_video${key}.jpg`);
    video[key].watchlater = true;
}

let online_people = {
    people: 1111597,
    news: 843,
    image: require(`../assets/imgs/icon/online_people_image.jpg`),
}

export default {
    name: 'extension',
    data() {
        return {
            video: video,
            online_people: online_people,
        }
    },
}
</script>