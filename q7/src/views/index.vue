<template>
    <div class="index">
        <carousel></carousel>
        <hot-goods></hot-goods>
        <sales-net></sales-net>
    </div>
</template>

<script>

import Carousel from '../components/carousel.vue';
import HotGoods from '../components/hot_goods.vue';
import SalesNet from '../components/sales_net.vue';
export default {
    name: 'index',
    components: {
        Carousel,
        HotGoods,
        SalesNet,
    }
}
</script>