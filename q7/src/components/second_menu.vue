<template>
    <div class="second_menu">
        <div v-for="item in data" class="second_menu_item" is="router-link" :to="item.link">
            {{ item.connect }}
            <div class="second_menu_item_back"></div>
        </div>
    </div>
</template>
<script>
let data = [
    { link: '/', connect:'首页' },
    { link: '/goods', connect:'全部产品' },
    { link: '/about', connect:'关于我们' },
]

export default {
    name: 'second_menu',
    data() {
        return {
            data: data,
        }
    },
}
</script>