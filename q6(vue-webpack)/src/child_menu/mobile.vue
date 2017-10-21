<template>
    <div class="mobile_menu">
        <ul>
            <li v-for="data in datas">
                {{ data.text }}
            </li>
        </ul>
    </div>
</template>

<script>
let datas = [
    { text: 'mobile_menu1' },
    { text: 'mobile_menu2' },
    { text: 'mobile_menu3' }
]
export default {
    name: 'mobile_menu',
    data() {
        return {
            datas: datas
        }
    }
}
</script>