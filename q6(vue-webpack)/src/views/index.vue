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
        <suoyin></suoyin>
    </div>
</template>

<script>
import Carousel from '../components/carousel.vue';
import Suoyin from '../components/suoyin.vue';
import HotVideo from '../components/hot_video.vue';
import Extension from '../components/extension.vue';
import titlemenu from '../components/title_menu.vue';
export default {
    name: 'index',
    components: {
        Carousel,
        Suoyin,
        HotVideo,
        Extension,
        titlemenu,
    }
}
</script>