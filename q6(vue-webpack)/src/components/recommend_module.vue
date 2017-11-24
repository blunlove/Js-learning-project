<template>
    <div class="recommend_module">
        <div class="recommend_module_plate">
            <div class="child_title">
                <div class="child_title_image" :style="{'background-position': '-140px -908px'}"></div>
                <div class="child_title_word">
                    <div class="child_title_word_title">特别推荐</div>
                </div>
            </div>
            <div class="recommend_module_plate_video">
                <div v-for="item in recommend_data" class="recommend_module_plate_video_item">
                    <div class="recommend_module_plate_video_item_image"
                        :style="{backgroundImage: `url(${item.image})`}"
                        >
                        <div :class="['watchlater', {'add': item.watchlater}, {'delete': !item.watchlater}]"
                            @click="item.watchlater = !item.watchlater"
                            >
                        </div>
                    </div>
                    <div class="recommend_module_plate_video_item_title">{{ item.title }}</div>
                    <div class="recommend_module_plate_video_item_user_icon"
                        :style="{backgroundImage: `url(${item.icon})`}"
                        >
                    </div>
                    <div class="recommend_module_plate_video_item_user">
                        <div class="recommend_module_plate_video_item_user_up">
                            {{ item.up }}
                        </div>
                        <span>推荐</span>
                    </div>
                </div>
            </div>
        </div
        ><div class="recommend_module_menu">
            <div class="recommend_module_menu_image"></div>
        </div>
    </div>
</template>

<script>
let recommend_data = [
    {
        title: 'Tokyo Bon 东京盂兰盆会舞2020 (Makudonarudo) Namewee黃明志 ft.Ninomiya Meu二宮芽生',
        up: 'ここにいるよ',
        image: require(`../assets/imgs/recommend_module/recommend_module_video0.jpg`),
        icon: require(`../assets/imgs/recommend_module/recommend_module_icon0.jpg`),
        watchlater: true,
    },
    {
        title: '【梦音翻唱】ここにしか咲かない花【治愈哭qwq】',
        up: '妹空酱',
        image: require(`../assets/imgs/recommend_module/recommend_module_video1.jpg`),
        icon: require(`../assets/imgs/recommend_module/recommend_module_icon1.jpg`),
        watchlater: true,
    },
    {
        title: '【3F/七宗罪·色·欲】阿斯蒙蒂斯的疯狂【紫羽、Mitty】白夜追凶性转版·剧情PV付',
        up: '蔷薇.月.暮',
        image: require(`../assets/imgs/recommend_module/recommend_module_video2.jpg`),
        icon: require(`../assets/imgs/recommend_module/recommend_module_icon2.gif`),
        watchlater: true,
    },
    {
        title: '【心跳心跳文学部】【ED】Your Reality【中英字幕】',
        up: '面汤汤面君',
        image: require(`../assets/imgs/recommend_module/recommend_module_video3.jpg`),
        icon: require(`../assets/imgs/recommend_module/recommend_module_icon3.jpg`),
        watchlater: true,
    },
]
export default {
    name: 'recommend_module',
    data() {
        return {
            recommend_data: recommend_data,
        }
    },
}
</script>