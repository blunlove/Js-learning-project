<template>
    <div class="sales_net">
        <child-title :headerData="title_data"></child-title>
        <img class="sales_net_image" :src="require(`../assets/imgs/icon/world.png`)">
    </div>
</template>
<script>
let title_data = {
    chinese: '营销网',
    english: 'Sales Net',
}

import ChildTitle from './child/child_title.vue';
export default {
    name: 'sales_net',
    data() {
        return {
            title_data: title_data,
        }
    },
    components: {
        ChildTitle,
    }
}
</script>