<template>
    <div class="live_menu">
        <ul>
            <li v-for="data in datas">
                {{ data.text }}
            </li>
        </ul>
    </div>
</template>

<script>
let datas = [
    { text: 'live_menu1' },
    { text: 'live_menu2' },
    { text: 'live_menu3' }
]
export default {
    name: 'live_menu',
    data() {
        return {
            datas: datas
        }
    }
}
</script>
