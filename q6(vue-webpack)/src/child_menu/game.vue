<template>
    <div class="game_menu">
        <ul>
            <li v-for="data in datas" :class="'game_item ' + data.text">
                {{ data.text }}
            </li>
        </ul>
    </div>
</template>

<script>
let datas = [
    { text: 'game_menu1' },
    { text: 'game_menu2' },
    { text: 'game_menu3' }
]
export default {
    name: 'game_menu',
    data() {
        return {
            datas: datas
        }
    }
}
</script>