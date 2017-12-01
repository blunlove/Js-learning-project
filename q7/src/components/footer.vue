<template>
    <div class="footer">
        <div class="footer_menu">
            <div v-for="item in footer_menu" class="footer_menu_item">
                <div :class="'footer_menu_item_image ' + item.class"></div
                ><div class="footer_menu_item_word">
                    <div class="footer_menu_item_word_title">
                        {{ item.title }}
                        <span>/</span>
                        <div>{{ item.title2 }}</div>
                    </div>
                    <div class="footer_menu_item_word_connect">{{ item.connect }}</div>
                </div>
            </div>
        </div>
        <div class="footer_copyright">
            <div class="footer_copyright_chinese">{{ copyright.chinese }}</div>
            <div class="footer_copyright_english">{{ copyright.english }}</div>
        </div>
    </div>
</template>

<script>
let footer_menu = [
    { class: 'address', title: '地址 ',title2: ' Address', connect: '浙江省温州市经济技术开发区海城街道金山路33号'},
    { class: 'phone', title: '电话 ',title2: ' Phone', connect: '0577-86864768'},
    { class: 'email', title: '邮箱 ',title2: ' E-mail', connect: '513864395@qq.com'},
]
let copyright = {
    chinese: 'Copyright©温州耐洁阀芯有限公司.版权所有.',
    english: 'Copyright©WenZhou Naijie Ceramic Valve., LTD.All rights reserved.'
}

export default {
    name: 'footer_menu',
    data() {
        return {
            footer_menu: footer_menu,
            copyright: copyright,
        }
    },
}
</script>