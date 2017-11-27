<template>
    <div class="about_menu">
        <div class="about_menu_title">联系我们</div>
        <div class="about_menu_connect">
            <div v-for="item in data" :class="'about_menu_connect_' + item.class">{{ item.connect }}</div>
        </div>
    </div>
</template>

<script>
let data = [
    { 
        class: 'address',
        connect: '地址：浙江省温州市龙湾区海城街道海工大道金山路33号',
    },
    { 
        class: 'phone',
        connect: '电话：0577-86864768',
    },
    { 
        class: 'fax',
        connect: '传真：0577-85228114',
    },
    { 
        class: 'email',
        connect: '邮箱：314884680@qq.com',
    },
]

export default {
    name: 'about_menu',
    data() {
        return {
            data: data,
        }
    },
}
</script>