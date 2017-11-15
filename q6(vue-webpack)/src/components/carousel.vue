<template>
    <div class="carousel">
        <div class="carousel_back" :style="data.style"></div>
        <div class="carousel_more">
            <div class="carousel_more_back"></div>
            <div class="carousel_more_word">更多</div>
        </div>
        <transition-group tag="div" name="carousel_title">
            <div v-for="(menu, index) in data.menu" class="carousel_title" v-show="data.mark == index" :key="index">{{ menu.title }}</div>
        </transition-group>
        <div class="carousel_button">
            <div v-for="(menu, index) in data.menu" @click="changeMark(index)" :class="{ carousel_button_click: data.mark == index }"></div>
        </div>
    </div>
</template>

<script>
let data = {
    mark: 0,
    style: '',
    menu: [
        { title: '周五！' },
        { title: '恰逢诗意少年' },
        { title: '一起来胡萝卜辣~' },
        { title: '短片混减回来了！' },
        { title: '宝石之国' },
    ]
}

let beginCarousel;

export default {
    name: 'carousel',
    data() {
        return {
            data: data,
        }
    },
    methods: {
        restCarousel () {
            let s = `-${data.mark * 440}px`;
            data.style = { 'background-position-x': s };
        },
        changeMark (index) {
            data.mark = index;
            this.restCarousel();
            this.autoCarousel();
        },
        autoCarousel () {
            clearInterval(beginCarousel);
            beginCarousel = setInterval(() => {
                data.mark = (data.mark + 1) % 5;
                this.restCarousel();
            }, 5000);
        },
    },
    mounted() {
        this.autoCarousel();
    }
}
</script>
<style>
.carousel_title-enter-active, .carousel_title-leave-active {
    transition-timing-function: linear;
    transition: all 0.2s;
}

.carousel_title-enter, .carousel_title-leave-to {
    opacity: 0;
}
</style>