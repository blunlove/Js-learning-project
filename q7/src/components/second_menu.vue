<template>
    <div class="second_menu">
        <div v-for="item in data"
            :class="['second_menu_item', {'on': item.link == buttonState}]"
            @click="changeMark(item.link)"
            >
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
            buttonState: this.$route.path,
        }
    },
    methods: {
        changeMark(link) {
            this.buttonState = link;
            this.$router.push(link);
        }
    }
}
</script>