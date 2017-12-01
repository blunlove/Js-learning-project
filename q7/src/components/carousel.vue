<template>
    <div class="carousel">
        <div class="carousel_image" :style="style">
            <div v-for="item in carousel"
                class="carousel_image_item"
                :style="{backgroundImage: `url(${item.image})`}"
                >
            </div>
        </div>
        <div v-for="(item, index) in carousel"
            :class="['carousel_title', {'on': mark == index}]"
            >
            {{ item.title }}
        </div>
        <div class="carousel_button">
            <div v-for="(menu, index) in carousel"
                :class="{ 'on': mark == index }"
                @mouseover="changeMark(index)">
            </div>
        </div>
    </div>
</template>

<script>
let carousel = [
    {
        title: '111',
    },
    {
        title: '222',
    },
    {
        title: '333',
    },
    {
        title: '444',
    },
    {
        title: '555',
    },
]
for (let key in carousel) {
    carousel[key].image = require(`../assets/imgs/carousel/carousel${key}.jpg`);
}
let beginCarousel;

export default {
    name: 'carousel',
    data() {
        return {
            carousel: carousel,
            mark: 0,
            style: '',
        }
    },
    methods: {
        restCarousel () {
            let s = `-${this.mark * 1160}px`;
            this.style = { 'left': s };
        },
        changeMark (index) {
            this.mark = index;
            this.restCarousel();
            this.autoCarousel();
        },
        autoCarousel () {
            clearInterval(beginCarousel);
            beginCarousel = setInterval(() => {
                this.mark = (this.mark + 1) % 5;
                this.restCarousel();
            }, 5000);
        },
    },
    mounted() {
        this.autoCarousel();
    }
}
</script>