<template>
    <div class="suoyin">
        <div class="back"
            :style="style"
            >
            <div class="back_image"
                @click="changeScroll(0)"
                >
            </div>
        </div>
    </div>
</template>

<script>

let scrolling = false;
const disable_mousewheel = boolean => {
    if (boolean) {
        $(document).bind('mousewheel', () => false);
    }else {
        $(document).unbind('mousewheel');
    }
}

const changeScroll = (x) => {
    if (!scrolling) {
        scrolling = true;
        disable_mousewheel(true);
        $("html").animate({
            scrollTop: x
        }, 300, () => {
            scrolling = false;
            disable_mousewheel(false);
        });
    }
}

export default {
    name: 'suoyin',
    data() {
        return {
            style: {},
        }
    },
    methods: {
        changeScroll,
    },
    mounted() {
        $(document).scroll(() => {
            let now_scroll = $(document).scrollTop();
            if (now_scroll > 0) {
                this.style = { opacity: 1, visibility: 'visible' };
            }else {
                this.style = { opacity: 0, visibility: 'hidden' };
            }
        });
    },
}
</script>