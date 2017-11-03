<template>
    <div class="body_index">
        <div>index</div>
        <div class="mobilePhone"
            @click="toTop()"
            :style="style"
            v-on:mouseover="mobilePhone_over()"
            v-on:mouseleave="mobilePhone_leave()">
        </div>
    </div>
</template>

<script>
let mobilePhone = {
    isAnimation: false,
    isLeaving: false,
    begin: false,
    frame: 0,
};
let scrolling = false;

const disable_mousewheel = boolean => {
    if (boolean) {
        $(document).bind('mousewheel', () => false);
    }else {
        $(document).unbind('mousewheel');
    }
}

const toTop = () => {
    if (!scrolling) {
        scrolling = true;
        disable_mousewheel(true);
        $("body").animate({
            scrollTop: 0
        }, 500, () => {
            scrolling = false;
            disable_mousewheel(false);
        });
    }
}

export default {
    name: 'index',
    data() {
        return {
            style: '',
        }
    },
    methods: {
        mobilePhone_animation () {
            setTimeout(() => {
                mobilePhone.isAnimation = true;
                if (mobilePhone.isLeaving == true){
                    mobilePhone.frame--;
                }else {
                    mobilePhone.frame++;
                    if ( mobilePhone.frame > 15 ) {
                        mobilePhone.frame = mobilePhone.frame - 6;
                    }
                }
                let px = mobilePhone.frame * 80;
                this.style = `background-position: -${px}px`;
                if (mobilePhone.frame > 0){
                    this.mobilePhone_animation();
                }else {
                    mobilePhone.isLeaving = false;
                    mobilePhone.isAnimation = false;
                    mobilePhone.begin = false;
                }
            }, 100);
        },
        mobilePhone_over () {
            mobilePhone.isLeaving = false;
            if (!mobilePhone.begin) {
                mobilePhone.begin = true;
                this.mobilePhone_animation();
            }
        },
        mobilePhone_leave () {
            if (!mobilePhone.isAnimation) {
                return;
            }
            mobilePhone.isLeaving = true;
            if (mobilePhone.frame > 10) {
                mobilePhone.frame = 10;
            }
        },
        toTop
    }
}
</script>