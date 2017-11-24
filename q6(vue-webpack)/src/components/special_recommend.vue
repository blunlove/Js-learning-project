<template>
    <div class="special_recommend">
        <div class="special_recommend_top">
            <div class="special_recommend_top_title">特别推荐</div>
        </div>
        <div class="special_recommend_connent">
            <div class="special_recommend_connent_image" :style="{left: image_position}">
                <div v-for="item in datas" :style="{backgroundImage: `url(${item.image})`}"></div>
            </div>
            <div class="special_recommend_connent_title">
                <div v-for="(item, index) in datas"
                    :class="['special_recommend_connent_title_item',{'on': buttonState == index}]"
                    >
                    {{ item.title }}
                </div>
            </div>
            <div class="special_recommend_connent_button">
                <div v-for="(item, index) in Array(2)"
                    :class="['special_recommend_connent_button_item',{'on': buttonState == index}]"
                    @mouseover="changeMark(index)"
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
let datas = [
    {
        image: require(`../assets/imgs/special_recommend/special_recommend0.jpg`),
        title: '温暖人心小故事',
    },
    {
        image: require(`../assets/imgs/special_recommend/special_recommend1.jpg`),
        title: '画龙点睛缺一笔',
    },
]
let beginCarousel;
export default {
    name: 'special_recommend',
    data() {
        return {
            datas: datas,
            buttonState: 0,
            image_position: '',
        }
    },
    methods: {
        restCarousel () {
            this.image_position = `${this.buttonState * -260}px`;
        },
        changeMark (index) {
            this.buttonState = index;
            this.restCarousel();
            this.autoCarousel();
        },
        autoCarousel () {
            clearInterval(beginCarousel);
            beginCarousel = setInterval(() => {
                this.buttonState = (this.buttonState + 1) % 2;
                this.restCarousel();
            }, 3000);
        },
    },
    mounted() {
        this.autoCarousel();
    },
}
</script>