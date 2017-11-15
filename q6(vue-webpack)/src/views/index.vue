<template>
    <div class="body_index">
        <carousel></carousel
        ><hot-video></hot-video>
        <suoyin></suoyin>
    </div>
</template>

<script>
import Carousel from '../components/carousel.vue';
import Suoyin from '../components/suoyin.vue';
import HotVideo from '../components/hot_video.vue';
export default {
    name: 'index',
    components: {
        Carousel, Suoyin, HotVideo
    }
}
</script>