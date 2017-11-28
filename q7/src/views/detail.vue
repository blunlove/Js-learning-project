<template>
    <div class="detail">
        <div class="detail_connect" :style="{backgroundImage: `url(${good.detail})`}">
            
        </div>
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
}
</script>