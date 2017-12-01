<template>
    <div class="header">
        <div class="header_line"></div>
        <div class="header_back"></div>
        <div class="header_menu">
            <div class="header_menu_top">
                <div class="header_menu_top_sign" is="router-link" to="/"></div>
                <div v-for="item in data" class="header_menu_top_item">
                    <div :class="'header_menu_top_item_' + item.class"></div>
                    {{ item.connect }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
let data = [
    {
        class: 'phone',
        connect: '0577-86864768',
    },
    {
        class: 'email',
        connect: '513864395@qq.com',
    },
    {
        class: 'address',
        connect: '浙江省温州市经济技术开发区海城街道金山路33号',
    },
]

export default {
    name: 'header',
    data() {
        return {
            data: data,
        }
    },
}
</script>