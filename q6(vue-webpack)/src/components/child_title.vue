<template>
    <div class="child_title">
        <slot name="top_image"><div class="child_title_image" :style="{'background-position': title_image}"></div></slot>
        <div class="child_title_word">
            <div class="child_title_word_title">正在直播</div>
            <slot name="news_button">
                <div class="child_title_button">
                    <div v-for="(button, index) in child_title_button"
                        :class="'child_title_button_' + button.class"
                        @click="changeState(index)"
                        >
                        有新动态
                        <div class="child_title_button_arrow">
                            <div :class="{'child_title_button_arrow_head': buttonState == index}"></div>
                            <div :class="{'child_title_button_arrow_line': buttonState == index}"></div>
                        </div>
                    </div>
                </div>
            </slot>
            <div class="child_title_word_fire">233秒居然能做这些！</div>
        </div>
        <div class="child_title_other">
            <div class="child_title_news">
                <div class="child_title_news_image"></div>
                <span class="child_title_news_word"><b>1660</b>条新动态</span>
            </div>
            <div class="child_title_more">
                <span class="child_title_more_word">更多</span>
                <div class="child_title_more_image"></div>
            </div>
        </div>
    </div>
</template>

<script>
let child_title_button = [
    {class: 'dynamic', connent: '有新动态', buttonState: 0},
    {class: 'submission', connent: '最新投稿', buttonState: 1},
]
let buttonState = 0;
let title_image = '-140px -652px';
export default {
    name: 'child_module',
    data() {
        return {
            buttonState: buttonState,
            child_title_button: child_title_button,
            title_image: title_image,
        }
    },
    methods: {
        changeState(index) {
            this.buttonState = index;
        }
    }
}
</script>