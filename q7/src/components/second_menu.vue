<template>
    <div class="second_menu">
        <div v-for="(item, index) in data"
            :class="['second_menu_item', {'on': index == buttonState}]"
            @click="changeMark(index, item.link)"
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
            buttonState: 0,
        }
    },
    methods: {
        changeMark(index, link) {
            this.buttonState = index;
            this.$router.push(link);
        }
    }
}
</script>