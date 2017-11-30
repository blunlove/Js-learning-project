<template>
    <div class="goods_menu">
        <child-title :headerData="faxinClass"></child-title>
        <div class="goods_menu_connect">
            <div v-for="item in faxinClass.connect"
                class="goods_menu_connect_item"
                is="good-module"
                :good="goods[item]"
                >
            </div>
        </div>
    </div>
</template>
<script>
import ChildTitle from './child/child_title.vue';
import GoodModule from './child/good_module.vue';
export default {
    name: 'goods_menu',
    props: ['faxinClass', 'goods'],
    components: {
        ChildTitle,
        GoodModule,
    }
}
</script>