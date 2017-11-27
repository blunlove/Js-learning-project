<template>
    <div class="goods">
        <goods-menu></goods-menu>
    </div>
</template>

<script>
import GoodsMenu from '../components/goods_menu.vue';
export default {
    name: 'goods',
    data() {
        return {
        }
    },
    components: {
        GoodsMenu,
    }
}
</script>