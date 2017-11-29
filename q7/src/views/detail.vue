<template>
    <div class="detail">
        <div class="detail_title">
            <div class="detail_title_name">
                <div>
                    <div class="detail_title_name_icon"></div>
                    <div class="detail_title_name_connect">{{ good.name2 }}</div>
                </div>
                <div>
                    <div class="detail_title_name_icon"></div>
                    <div class="detail_title_name_connect">{{ good.name }}</div>
                </div>
            </div>
        </div>
        <img class="detail_header" :src="getImage('header')">
        <img class="detail_parameter" :src="getImage('p')">
    </div>
</template>

<script>

export default {
    name: 'detail',
    data() {
        return {
            good: this.$route.query,
        }
    },
    methods: {
        getImage(x) {
            return require(`../assets/imgs/goods/${this.good.name2}/${x}.jpg`);
        },
    },
}
</script>