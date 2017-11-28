<template>
    <div class="goods_menu">
        <div class="goods_menu_header">{{ faxinClass.title }}</div>
        <div class="goods_menu_connect">
            <div
                v-for="item in faxinClass.connect"
                class="goods_menu_connect_item"
                is="router-link"
                :to="{ path:'/detail', query: goods[item] }"
                >
                <div class="goods_menu_connect_item_image"
                    :style="{backgroundImage: `url(${goods[item].icon})`}">
                </div>
                <div class="goods_menu_connect_item_title">
                    {{ goods[item].name }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'goods_menu',
    props: ['faxinClass', 'goods'],
}
</script>