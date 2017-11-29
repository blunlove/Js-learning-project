<template>
    <div class="index">
        <carousel></carousel>
        <hot-goods></hot-goods>
    </div>
</template>

<script>

import Carousel from '../components/carousel.vue';
import HotGoods from '../components/hot_goods.vue';
export default {
    name: 'index',
    components: {
        Carousel,
        HotGoods,
    }
}
</script>