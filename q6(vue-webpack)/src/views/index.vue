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
        <live-module>
            <child-title>
                <span slot="news_button">当前共有<span class="live_online">2073</span>个在线直播</span>
            </child-title>
        </live-module>
        <suoyin></suoyin>
    </div>
</template>

<script>
import Carousel from '../components/carousel.vue';
import Suoyin from '../components/suoyin.vue';
import HotVideo from '../components/hot_video.vue';
import Extension from '../components/extension.vue';
import titlemenu from '../components/title_menu.vue';
import LiveModule from '../components/live_module.vue';
import ChildTitle from '../components/child_title.vue';
export default {
    name: 'index',
    components: {
        Carousel,
        Suoyin,
        HotVideo,
        Extension,
        titlemenu,
        LiveModule,
        ChildTitle,
    }
}
</script>