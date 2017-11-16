<template>
    <div class="body_index">
        <carousel></carousel
        ><hot-video></hot-video>
        <extension></extension>
        <suoyin></suoyin>
    </div>
</template>

<script>
import Carousel from '../components/carousel.vue';
import Suoyin from '../components/suoyin.vue';
import HotVideo from '../components/hot_video.vue';
import Extension from '../components/extension.vue';
export default {
    name: 'index',
    components: {
        Carousel,
        Suoyin,
        HotVideo,
        Extension,
    }
}
</script>